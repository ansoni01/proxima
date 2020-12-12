import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrmDashboardComponent } from './empresa-registros/crm-dashboard.component';
import { extract } from '@app/i18n';

const routes: Routes = [
  {
    path: '**',
    component: CrmDashboardComponent,
    data: { title: extract('CRM Dashboard') },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpresaRoutingModule {}
