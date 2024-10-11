import diarioController from "./controllers/diarioControllers.js";
import usuarioController from "./controllers/usuarioControllers.js";

export default function routes(servidor) {
    servidor.use(diarioController)
    servidor.use(usuarioController)
}