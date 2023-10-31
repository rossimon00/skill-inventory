import { Categoria } from "./categoria";

export class Tecnologia{
    nome:string;
    categoria:Categoria;
    constructor(nome: string, categoria:Categoria) {
        this.nome = nome;
        this.categoria = categoria;
    }

}

