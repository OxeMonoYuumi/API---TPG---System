//Importando o Mongoose
import mongoose from "mongoose";

const connect = () => {
    mongoose.connect(
        `mongodb://127.0.0.1:27017/api-theskills`
    );
};

const connection = mongoose.connection;

connection.on("error", () => {
    console.log("Erro ao conectar com o mongoDB.");
});

connection.on("open", () => {
    console.log("Conectado ao mongoDB com sucesso!");
});

connect();

export default mongoose;