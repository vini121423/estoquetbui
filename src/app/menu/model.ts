export class Categoria{
     id: number;
     nome: string;
}

export class Produto{
    id: number;
    nome:string;
    preco:number;
    categoria = new Categoria();
}