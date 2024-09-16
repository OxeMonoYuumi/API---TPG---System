import skillService from "../services/skillServices.js  ";
import { ObjectId } from "mongodb";

//Buscando todas as Habilidades
const getAllSkills = async (req, res) => {
    try {
        const skills = await skillService.getAll();
        //Cód. Status 200 - OK
        res.status(200).json({ skills: skills });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do Servidor."});
    }
};

//Cadastrando uma Habilidade
const createSkill = async (req, res) => {
    try {
        //Desetruturação
        const { component, year_range, skill, comment, skill_code } = req.body;
        await skillService.Create(component, year_range, skill, comment, skill_code);
        res.sendStatus(201); //Código 201 - CREATED
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do Servidor."});
    }
};

//Deletando uma Habilidade
const deleteSkill = async (req, res) => {
    try{
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            skillService.Delete(id);
            res.sendStatus(204); //Código 204 - NO CONTENT
        } else {
            res.sendStatus(400); //Código 400 - BAD REQUEST
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do Servidor."});
    }
};

//Alterando uma Habilidade
const updateSkill = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)) {
            const id = req.params.id;
            const { component, year_range, skill, comment, skill_code } = req.body;
            skillService.Update(id, component, year_range, skill, comment, skill_code);
            res.sendStatus(200) //Código 200 - OK
        } else {
            res.sendStatus(400); //Código 400 - BAD REQUEST
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Erro interno do Servidor."})
    }
};

//Listando uma única Habilidade
const getOneSkill = async (req, res) => {
    try {
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
        const skill = await skillService.getOne(id)
        if(!skill){
            res.sendStatus(404) // Código 404 : NOT FOUND
        } else {
            res.status(200).json({ skill })
        }
        } else {
        res.sendStatus(400) // Código 400 (BAD REQUEST): Requisição inválida
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor." });
    }
}
export default { getAllSkills, createSkill, deleteSkill, updateSkill, getOneSkill };