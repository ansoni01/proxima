import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // Module is lazy loaded, see app-routing.module.ts
  {
    path: '',
    children: [
      { path: 'user', loadChildren: () => import('./user/user.module').then((m) => m.UserModule) },
      { path: 'empresa', loadChildren: () => import('./empresa/empresa.module').then((m) => m.EmpresaModule) },
      { path: 'colaborador', loadChildren: () => import('./colaborador/colaborador.module').then((m) => m.ColaboradorModule) },
      { path: 'rol', loadChildren: () => import('./rol/rol.module').then((m) => m.RolModule) },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrosRoutingModule {}
