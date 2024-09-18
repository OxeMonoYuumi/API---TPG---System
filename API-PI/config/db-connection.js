//Importando o Mongoose
import mongoose from "mongoose";

const connect = () => {
    mongoose.connect(
        `mongodb+srv://pedroxveiga12:ORLJSXP8kI194260@cluster0.k4l4y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
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
