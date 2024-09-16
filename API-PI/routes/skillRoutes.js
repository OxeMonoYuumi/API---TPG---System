import express from 'express'
const skillRoutes = express.Router()
import skillController from '../controllers/skillControllers.js'

//Rotas - Endpoints
//Endpoint para Listar todas as Habilidades
skillRoutes.get("/skills", skillController.getAllSkills)

//Endpoint para Cadastrar uma Habilidades
skillRoutes.post("/skill", skillController.createSkill)

//Endpoint para Deletar uma Habilidades
skillRoutes.delete("/skill/:id", skillController.deleteSkill)

//Endpoint para Alterar uma Habilidades
skillRoutes.put("/skill/:id", skillController.updateSkill)

//Endpoint para Listar uma única Habilidades
skillRoutes.get("/skill/:id", skillController.getOneSkill)

export default skillRoutes

