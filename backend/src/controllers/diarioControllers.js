import  * as diario from "../repository/diarioRepository.js";
import { autenticar } from "../utils/jws.js";
import { Router } from "express";

const endpoints = Router();

endpoints.get("/diario", autenticar, async (req, resp) => {
    try{
        let idUsuario = req.user.id
        let info = await diario.getDiario(idUsuario);
        resp.status(200).send(info);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

endpoints.post("/diario", autenticar, async (req, resp) => { 
  try
  {
    let segredo = req.body;

    let id = await diario.postDiario(segredo);

    resp.status(200).send({id:id});
    }
catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

endpoints.put("/diario/:id", autenticar ,async (req, resp) => {      
    
try{
    let segredo = req.body;
    let id = req.params.id;

    let info = await diario.updateDiario(segredo, id);

    resp.status(200).send(info);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
    
});

endpoints.delete("/diario/:id", autenticar, async (req, resp) => {
    try{
        let id = req.params.id;

        let info = await diario.deleteDiario(id);

        resp.status(200).send(info);
        }
        catch (err) {
            resp.status(400).send({
                erro: err.message
            })
        }
        
});

                                              

export default endpoints;