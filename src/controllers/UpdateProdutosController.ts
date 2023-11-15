import {Request, Response} from "express";
import { UpdateProdutosService } from "../services/UpdateProdutosService";

export class UpdateProdutosController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const { name, price, description } = request.body;

        const services = new UpdateProdutosService();

        const result = await services.execute({id, name, price, description});

        if(result instanceof Error) {
            return response.status(400).json(result.message)
        }

        return response.json(result);
    }
}