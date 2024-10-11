import * as db from "../repository/usuarioRepository.js";
import { Router } from "express";
import { gerarToken } from "../utils/jws.js";

const endpoints = Router();

endpoints.get("/usuario", async (req, resp) => {
    try {

        let usuario = req.body;

        let info = await db.getUsuario(usuario);

        if (!usuario && !senha || usuario == null) {

            resp.send({
                erro: 'Usuario ou senha incorretos '
            })

        }
        else {
           let token = gerarToken(info)

           resp.send({
            'token':token
           })
        }




        resp.status(200).send();
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

endpoints.post("/usuario",  async (req, resp) => {
    try
    {
        let usuario = req.body;
  
      let id = await db.postUsuario(usuario)
  
      resp.status(200).send({id:id});
      }
  catch (err) {
          resp.status(400).send({
              erro: err.message
          })
      }
  });
  

  export default endpoints;