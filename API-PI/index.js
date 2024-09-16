import express from "express";
const app = express();
import mongoose from "./config/db-connection.js";
import Skill from "./models/Skills.js";
import skillRoutes from "./routes/skillRoutes.js";


//Configuração do Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', skillRoutes)

// mongoose.connect("mongodb://127.0.0.1:27017/api-theskills")

//Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`API rodando em http://localhost:${port}.`);
});


