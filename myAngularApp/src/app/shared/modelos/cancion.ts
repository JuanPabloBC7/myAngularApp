export class Cancion {
    id?: number;
    nombre: string;
    genero?: number;
    artista?: number;

    constructor(pId = 0, pNombre = '', pGenero = 0, pArtista = 0) {
        this.id = pId;
        this.nombre = pNombre;
        this.genero = pGenero;
        this.artista = pArtista;
    }
}
