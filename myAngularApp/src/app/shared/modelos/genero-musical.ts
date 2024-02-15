export class GeneroMusical {
    id?: number;
    clasificacion: string;

    constructor(pId = 0, pClasificacion = '') {
        this.id = pId;
        this.clasificacion = pClasificacion;
    }
}
