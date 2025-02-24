export class ErroPersonalizado extends Error {
    constructor(mensagem, statusCode) {
        super(mensagem);
        this.statusCode = statusCode;
    }
}