import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministrarUsuarioComponent } from './administrar-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: AdministrarUsuarioComponent,
    data: {
      title: $localize`administrar-usuario`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrarUsuarioRoutingModule { }
