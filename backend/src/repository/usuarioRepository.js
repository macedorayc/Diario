import con from "./connection.js";



export async function getUsuario(usuario, senha){
let comando = `SELECT * FROM tb_usuario WHERE nm_usuario = ? AND senha = ?`;

let resultado = await con.query(comando , [usuario, senha]);

let info = resultado[0];

return info;

}

export async function postUsuario(usuario, senha){
    let comando = `INSERT INTO tb_usuario 
     nm_usuario , senha) 
     VALUES (?,?)`	
   
   let resultado = await con.query(comando, [usuario, senha]);
   let info = resultado[0];

   return info.insertId;

}


