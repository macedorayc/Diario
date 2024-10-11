
import express from "express";
import cors from "cors";
import "dotenv/config";

const servidor = express();
servidor.use(cors())
servidor.use(express.json());


const PORTA = process.env.PORTA;

servidor.listen(PORTA, () => {
    console.log(`API subiu a Porta:${PORTA}`);
});

