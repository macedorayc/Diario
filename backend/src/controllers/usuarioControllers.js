import * as usuario from "../repository/usuarioRepository.js";
import { Router } from "express";

const endpoints = Router();

endpoints.get("/usuario", async (req, resp) => {
    try{

        let usuario = req.body.usuario;
        let senha = req.body.senha;
        let info = await usuario.getUsuario(usuario, senha);

        resp.status(200).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});