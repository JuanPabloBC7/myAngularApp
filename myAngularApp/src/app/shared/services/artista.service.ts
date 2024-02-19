import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArtistaModelo } from '../modelos/artista';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  BASE_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }
  // constructor() { }

  obtenerArtistas(){
    return this.http.get<ArtistaModelo[]>(this.BASE_URL + '/artistas');
  }

  obtenerArtista(id: string) {
    return this.http.get<ArtistaModelo[]>(`${this.BASE_URL}/artista/${id}`);
  }

  agregarArtista(artista: ArtistaModelo) {
    return this.http.post<string>(`${this.BASE_URL}/artista/`, artista);
  }

  actualizarArtista(artista: ArtistaModelo) {
    return this.http.put<string>(`${this.BASE_URL}/artista/${artista.id}`, artista);
  }

  eliminarArtista(id: string) {
    return this.http.delete<string>(`${this.BASE_URL}/artista/${id}`);
  }
}
