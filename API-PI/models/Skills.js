import mongoose from 'mongoose'

const descriptionsSchema = new mongoose.Schema({
    cp: String,
    bncc: String
})

const skillSchema = new mongoose.Schema({
    component: String,
    year_range: String,
    skill: String,
    comment: String,
    //Documento Aninhado
    skill_code: [descriptionsSchema]
})

const Skill = mongoose.model('Skill', skillSchema)

export default Skill