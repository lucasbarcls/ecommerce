import { Request, Response } from "express";
import { DeleteProdutosService } from "../services/DeleteProdutosService";

export class DeleteProdutosController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const service = new DeleteProdutosService();

        const result = await service.execute(id);

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }

        return response.status(204).end();
    }
}