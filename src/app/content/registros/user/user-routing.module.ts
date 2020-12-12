import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRegistrosComponent } from './user-registros/user-registros.component';
import { extract } from '@app/i18n';

const routes: Routes = [
  {
    path: '**',
    component: UserRegistrosComponent,
    data: { title: extract('Usuarios') },
  },
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
