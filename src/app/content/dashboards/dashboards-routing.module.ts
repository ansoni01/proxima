import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: '',
    children: [
      { path: 'crm', loadChildren: () => import('./crm/crm.module').then((m) => m.CrmModule) },
      { path: 'social', loadChildren: () => import('./social/social.module').then((m) => m.SocialModule) },
      { path: 'covid-19', loadChildren: () => import('./covid-19/covid-19.module').then((m) => m.Covid19Module) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardsRoutingModule {}
