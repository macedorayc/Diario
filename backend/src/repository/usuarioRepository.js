import con from "./connection.js";

export async function getUsuario(usuario){
let comando = `    select 
id_usuario id,
nm_usuario nome
from tb_usuario 
where 
nm_usuario = ?
and ds_senha = ?`;

let resultado = await con.query(comando , [usuario.usuario, senha.senha]);

let info = resultado[0][0];

return info;

}

export async function postUsuario(usuario){
    let comando = `INSERT INTO tb_usuario 
     nm_usuario , senha) 
     VALUES (?,?)`	
   
   let resultado = await con.query(comando, [usuario.usuario, senha.senha]);
   let info = resultado[0];

   return info.insertId;

}


