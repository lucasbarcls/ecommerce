import { Request, Response } from "express";
import {CreateProdutosService} from "../services/CreateProdutosService";


export class CreateProdutosController {
    async handle(request: Request, response: Response) {
        const {name, price, description, imagepath} = request.body
        
        const service = new CreateProdutosService();

        const result = await service.execute({name, price, description, imagepath});

        if(result instanceof Error) {
            return response.status(400).json(result.message);
        }
        
        return response.json(result);
    }
}