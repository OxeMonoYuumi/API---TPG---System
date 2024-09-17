import Skill from "../models/Skills.js";

class skillService {
    //Padrão async/await
    //Método para buscar todas as Habilidades
    async getAll() {
        try {
            const skills = await Skill.find();
            return skills;
        } catch (error) {
            console.log(error);
        }
    }

    //Método para cadastrar uma Habilidade
    async Create(component, year_range, skill, comment, skill_code) {
        try {
            const newSkill = new Skill({
                component,
                year_range,
                skill,
                comment,
                skill_code 
            });
            await newSkill.save();
        } catch (error) {
            console.log(error);
        }
    }

    //Método para deletar uma Habilidade
    async Deleted(id) {
        try {
            await Skill.findByIdAndDelete(id);
            console.log(`Habilidade com id: ${id} foi deletada com sucesso.`);
        } catch (error) {
            console.log(error);
        }
    }

    //Método para alterar uma Habilidade
    async Update(id, component, year_range, skill, comment, skill_code) {
        try {
            await Skill.findByIdAndUpdate(id, {
                component,
                year_range,
                skill,
                comment,
                skill_code 
            });
            console.log(`Dados da Habilidade com id: ${id} alterado com sucesso.`);
        } catch (error) {
            console.log(error);
        }
    }

    //Método para listar uma única Habilidade
    async getOne(id) {
        try {
            const skill = await Skill.findOne({_id: id})
            return skill
        } catch (error) {
            console.log(error)
        }
    }
}
export default new skillService();

