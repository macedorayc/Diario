import {autenticacao } from "../utils/jws.js";
import * as diario from "../repository/diarioRepository.js";
import { Router } from "express";

const endpoints = Router();


endpoints.get("/diario", autenticacao, async (req, resp) => {
    try {
        let idUsuario = req.user.id;
        let info = await diario.getDiario(idUsuario);
        resp.send(info);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});


endpoints.post("/diario",autenticacao, async (req, resp) => { 
    try {
        let segredo = req.body;
        segredo.usuario = req.user.id; 

        let id = await diario.postDiario(segredo);
        resp.send({ id: id });
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});


endpoints.put("/diario/:id",autenticacao, async (req, resp) => {      
    try {
        let segredo = req.body;
        let id = req.params.id;

      let linhasAfetadas = await diario.updateDiario(segredo, id);
        if (linhasAfetadas >= 1) {
            resp.send();
        } else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' });
        }
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

endpoints.delete("/diario/:id",autenticacao, async (req, resp) => {
    try {
        let id = req.params.id;

        let linhasAfetadas = await diario.deleteDiario(id);
        if (linhasAfetadas >= 1) {
            resp.send();
        } else {
            resp.status(404).send({ erro: 'Nenhum registro encontrado' });
        }
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    }
});

export default endpoints;
