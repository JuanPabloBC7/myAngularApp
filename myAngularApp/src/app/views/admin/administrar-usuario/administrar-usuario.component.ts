import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-administrar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administrar-usuario.component.html',
  styleUrl: './administrar-usuario.component.scss'
})
export class AdministrarUsuarioComponent {

  constructor() { }

  persona = {
    id: 0,
    name: '', 
    age: undefined,
    mail: undefined
  };

  async CreateUser() {
    console.log(this.persona)
  }

  focus01: boolean = false;
  focus02: boolean = false;
  focus03: boolean = false;
}
