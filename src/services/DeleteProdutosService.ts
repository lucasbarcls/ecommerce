import { getRepository } from "typeorm";
import { Produtos } from "../entities/Produtos";

export class DeleteProdutosService {
    async execute(id: string) {
        const repo = getRepository(Produtos);

        if(!(await repo.findOne(id))) {
            return new Error("Category does not exists");
        }

        await repo.delete(id);
    }
}