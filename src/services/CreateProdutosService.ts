import { getRepository } from "typeorm";
import { Produtos } from "../entities/Produtos";

type ProdutosRequest = {
    name: string;
    price: number;
    description: string;
}


export class CreateProdutosService {
    async execute({
        name,
        price,
        description
    }:ProdutosRequest ): Promise<Produtos | Error> {
        const repo = getRepository(Produtos);

        if(await repo.findOne({ name })) {
            return new Error("Produto ja existe");
        }

        const produtos = repo.create({
            name,
            price,
            description
        })

        await repo.save(produtos);

        return produtos;
    }
}