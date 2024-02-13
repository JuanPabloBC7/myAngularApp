import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministrarUsuarioComponent } from '../admin/administrar-usuario/administrar-usuario.component'

const routes: Routes = [
  {
    path: 'administrar-usuario',
    component: AdministrarUsuarioComponent,
    data: {
      title: 'administrar-usuario'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
