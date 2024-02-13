import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Person } from '../../../../shared/models/models';

@Component({
  selector: 'app-formulario-principal',
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule
  ],
  templateUrl: './formulario-principal.component.html',
  styleUrl: './formulario-principal.component.css'
})
export class FormularioPrincipalComponent {
  persona: Person = {
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
