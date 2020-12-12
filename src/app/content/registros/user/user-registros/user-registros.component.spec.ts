import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrosComponent } from './user-registros.component';

describe('UserRegistrosComponent', () => {
  let component: UserRegistrosComponent;
  let fixture: ComponentFixture<UserRegistrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserRegistrosComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
