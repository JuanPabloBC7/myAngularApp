import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ArtistaModelo } from './../../../shared/modelos/artista';
import { Observable } from 'rxjs';
import { ArtistaService } from 'src/app/shared/services/artista.service';
import { Router, ActivatedRoute, RouterModule} from '@angular/router';

@Component({
  selector: 'app-artista',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './artista.component.html',
  styleUrl: './artista.component.scss'
})
export class ArtistaComponent implements OnInit{
  id = "";
  artistaForm = new ArtistaModelo("", "", "")
  artistas: Observable<ArtistaModelo[]> | undefined

  constructor(
    private artistaServicio: ArtistaService,
    private ruta: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.artistas = this.artistaServicio.obtenerArtistas();
    this.id = this.ruta.snapshot.params['id'];

    if (this.id!="0") {
      console.log("Editar");
      this.artistaServicio.obtenerArtista(this.id).subscribe(data => {
        this.artistaForm = data[0];
      });
    } else {
      console.log('Crear');
    }
  }

  async CreateArtista() {
    if (this.artistaForm.id) {
      console.log("Editando");
      this.artistaServicio.actualizarArtista(this.artistaForm).subscribe(data => {
        console.log(data);
        alert(data);
        // Si quiero navegar a otro lado
        // this.router.navigate(['/admin/artista']);
        window.location.reload();
      });
      console.log("Editado");
    } else {
      console.log("Creando");
      this.artistaServicio.agregarArtista(this.artistaForm).subscribe(data => {
        console.log(data);
        alert(data);
        // this.router.navigate(['/admin/artista']);
        window.location.reload();
      });
    }

    this.artistas = this.artistaServicio.obtenerArtistas();
  }

  DeleteArtista(id: string) {
    this.artistaServicio.eliminarArtista(id).subscribe(data => {
      console.log(data);
    });

    this.artistas = this.artistaServicio.obtenerArtistas();
  }

  focus01: boolean = false;
  focus02: boolean = false;
}
