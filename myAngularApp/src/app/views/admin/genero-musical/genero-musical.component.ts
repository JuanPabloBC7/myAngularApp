import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { GeneroMusical } from './../../../shared/modelos/genero-musical'

@Component({
  selector: 'app-genero-musical',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './genero-musical.component.html',
  styleUrl: './genero-musical.component.scss'
})
export class GeneroMusicalComponent {
  constructor() { }

  generoMusical: GeneroMusical = {
    id: 0,
    clasificacion: ''
  }

  async CreateGeneroMusical() {
    console.log(this.generoMusical)

    this.generoMusical.clasificacion = '';
  }

  focus01: boolean = false;
}
