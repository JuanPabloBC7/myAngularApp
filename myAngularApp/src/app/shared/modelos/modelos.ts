
export class Usuario {
    id?: number;
    nombre: string;
    edad?: number;
    correo?: string;

    constructor(pId = 0, pNombre = '', pEdad = 0, pCorreo = '') {
        this.id = pId;
        this.nombre = pNombre;
        this.edad = pEdad;
        this.correo = pCorreo;
    }
}
