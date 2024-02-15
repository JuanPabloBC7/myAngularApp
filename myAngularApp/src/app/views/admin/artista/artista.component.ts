import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Artista } from './../../../shared/modelos/artista';

@Component({
  selector: 'app-artista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './artista.component.html',
  styleUrl: './artista.component.scss'
})
export class ArtistaComponent {
  constructor() { }

  artista: Artista = {
    id: 0,
    nombre: '',
    fechaDeNacimiento: ''
  }

  async CreateArtista() {
    console.log(this.artista)

    this.artista.nombre = '';
    this.artista.fechaDeNacimiento = '';
  }

  focus01: boolean = false;
  focus02: boolean = false;
}
