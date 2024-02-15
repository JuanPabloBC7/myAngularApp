import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Cancion } from './../../../shared/modelos/cancion';

@Component({
  selector: 'app-cancion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cancion.component.html',
  styleUrl: './cancion.component.scss'
})
export class CancionComponent {
  constructor() { }

  cancion: Cancion = {
    id: 0,
    nombre: '',
    genero: undefined,
    artista: undefined
  };

  async CreateCancion() {
    console.log(this.cancion)

    this.cancion.nombre = '';
    this.cancion.genero = undefined;
    this.cancion.artista = undefined;
  }

  focus01: boolean = false;
  focus02: boolean = false;
  focus03: boolean = false;
}
