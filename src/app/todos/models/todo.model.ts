

export class Todo {

    public id: number;
    public texto: String;
    public completado: boolean;

    constructor( texto: String ) {

        this.texto = texto;
        this.id = Math.random();
        this.completado = false;

    }
}