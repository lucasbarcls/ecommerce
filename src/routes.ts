import { Router } from "express";
import { CreateProdutosController } from "./controllers/CreateProdutosController";
import { GetAllProdutosController } from "./controllers/GetAllProdutosController";
import { DeleteProdutosController } from "./controllers/DeleteProdutosController";
import { UpdateProdutosController } from "./controllers/UpdateProdutosController";

const routes = Router();

routes.post("/produtos", new CreateProdutosController().handle);
routes.get("/produtos", new GetAllProdutosController().handle);
routes.delete("/produtos/:id", new DeleteProdutosController().handle);
routes.put("/produtos/:id", new UpdateProdutosController().handle);

export { routes }