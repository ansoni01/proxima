import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Logger, AuthenticationService,BaseFormComponent } from '@core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { faCheck, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { faUser, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { finalize } from 'rxjs/operators';
import { RedirectService } from '@core/services/redirect.service';
import { Subscription } from 'rxjs';
import { AuthenticationServices } from '@core/services/authentication.service';
import { User } from '@core/models/user';
import { HeaderType } from '@core/enum/header-type.enum';

const log = new Logger('Login');

@Component({
  selector: 'prx-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
})
export class AuthLoginComponent extends BaseFormComponent implements OnInit {
  longArrowAltRight = faLongArrowAltRight;
  faUser = faUser;
  faArrowAltCircleRight = faArrowAltCircleRight;
  check = faCheck;

  public showLoading: boolean;
  private subscriptions: Subscription[] = [];


  constructor(
    //private router: Router,
    private _redirect: RedirectService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationServices: AuthenticationServices,
    private authenticationService: AuthenticationService

  ) {
    super();
    this.isLoading = false;
    this.createForm();
  }

  ngOnInit() {}

  /**
   * Logs-in the user
   * @param form The form value: user + password
   */
  login({ valid, value }: { valid: boolean; value: any }) {
    if (valid) {
      this.isLoading = true;

      this.showLoading = true;
      this.subscriptions.push(
        this.authenticationServices.login(value).subscribe(
          (response: HttpResponse<User>) => {
            const token = response.headers.get(HeaderType.JWT_TOKEN);
            this.authenticationServices.saveToken(token);
            this.authenticationServices.addUserToLocalCache(response.body);
            // this.route.navigateByUrl('/dashboards/crm');
            this.showLoading = false;
          },
          (errorResponse: HttpErrorResponse) => {
            // this.sendErrorNotification(NotificationType.ERROR, errorResponse.error.message);
            this.showLoading = false;
          }
        )
      );

      this.authenticationService
        .login(value)
        .pipe(
          finalize(() => {
            this.form.markAsPristine();
            this.isLoading = false;
          })
        )
        .subscribe(
          (credentials) => {
            log.debug(`${credentials.username} successfully logged in`);
            this.route.queryParams.subscribe((params) => this.redirect(params));
          },
          (error) => {
            log.debug(`Login error: ${error}`);
            this.error = error;
          }
        );
    }
  }

  redirect(params: Params) {
    if (params.redirect) {
      this._redirect.to(params.redirect, { replaceUrl: true });
    } else {
      this._redirect.toHome();
    }
  }

  private createForm() {
    this.form = this.formBuilder.group({
      username: ['example@demo.com', Validators.required],
      password: ['123456', Validators.required],
      remember: false,
    });
  }
}
