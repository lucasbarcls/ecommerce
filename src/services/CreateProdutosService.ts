import { getRepository } from "typeorm";
import { Produtos } from "../entities/Produtos";

type ProdutosRequest = {
    name: string;
    price: number;
    description: string;
    imagepath: string;
}


export class CreateProdutosService {
    async execute({
        name,
        price,
        description,
        imagepath
    }:ProdutosRequest ): Promise<Produtos | Error> {
        const repo = getRepository(Produtos);

        if(await repo.findOne({ name })) {
            return new Error("Produto ja existe");
        }

        const produtos = repo.create({
            name,
            price,
            description,
            imagepath
        })

        await repo.save(produtos);

        return produtos;
    }
}