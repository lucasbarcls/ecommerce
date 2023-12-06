import "reflect-metadata";
import express from "express";
import cors from "cors"; // Importe o pacote CORS
import './database';
import { routes } from "../src/routes";

const app = express();
const port = 3333;

// Middleware para aceitar JSON e habilitar CORS para desenvolvimento
app.use(express.json());

// Configuração do CORS
// Esta configuração básica permite todas as origens.
// Para um ambiente de produção, você deve configurar as origens permitidas.
app.use(cors());

app.use("/", routes);

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});