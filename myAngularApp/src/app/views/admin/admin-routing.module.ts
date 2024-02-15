import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministrarUsuarioComponent } from '../admin/administrar-usuario/administrar-usuario.component'
import { GeneroMusicalComponent } from '../admin/genero-musical/genero-musical.component'
import { CancionComponent } from '../admin/cancion/cancion.component'
import { ArtistaComponent } from '../admin/artista/artista.component'

const routes: Routes = [
  {
    path: 'administrar-usuario',
    component: AdministrarUsuarioComponent,
    data: {
      title: 'administrar-usuario'
    },
  },
  {
    path: 'genero-musical',
    component: GeneroMusicalComponent,
    data: {
      title: 'Genero Musical'
    },
  },
  {
    path: 'cancion',
    component: CancionComponent,
    data: {
      title: 'Cancion'
    },
  },
  {
    path: 'artista',
    component: ArtistaComponent,
    data: {
      title: 'Artista'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
