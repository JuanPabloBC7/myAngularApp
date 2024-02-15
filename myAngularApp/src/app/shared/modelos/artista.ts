export class Artista {
    id?: number;
    nombre: string;
    fechaDeNacimiento?: string;

    constructor(pId = 0, pNombre = '', pFechaDeNacimiento = '') {
        this.id = pId;
        this.nombre = pNombre;
        this.fechaDeNacimiento = pFechaDeNacimiento;
    }
}
