import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Usuario } from '../../../shared/modelos/modelos'

@Component({
  selector: 'app-administrar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administrar-usuario.component.html',
  styleUrl: './administrar-usuario.component.scss'
})
export class AdministrarUsuarioComponent {

  constructor() { }

  persona: Usuario = {
    id: 0,
    nombre: '',
    edad: undefined,
    correo: undefined
  };

  async CreateUser() {
    console.log(this.persona)

    this.persona.nombre = '';
    this.persona.edad = undefined;
    this.persona.correo = '';
  }

  focus01: boolean = false;
  focus02: boolean = false;
  focus03: boolean = false;
}
