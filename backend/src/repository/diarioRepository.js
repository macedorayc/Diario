
import con from "./connection.js";


export async function getDiario(){
let comando = `SELECT * FROM tb_diario WHERE id_usuario = ?`;

let resultado = await con.query(comando);

let info = resultado[0][0];

return info;


}

export async function postDiario(segredo){
    let comando = `INSERT INTO tb_diario  dt_dia ,
    ds_conteudo ,
    id_usuario) VALUES (?,?,?,?,?)`	

   let resultado = await con.query(comando, [segredo.data, segredo.conteudo, segredo.usuario]);
   let info = resultado[0];

   return info.insertId;


}

export async function updateDiario(segredo, id){
    let comando = `UPDATE tb_diario SET dt_dia = ? , ds_conteudo = ? WHERE id_usuario = ?`;
    let resultado = await con.query(comando, [segredo.data, segredo.conteudo, id]);
    let info = resultado[0];

    return info.affectedRows;
}

export async function deleteDiario(id){
    let comando = `DELETE FROM diario WHERE id_usuario = ?`;
    let resultado = await con.query(comando, [id]);
    let info = resultado[0];

    return info.affectedRows;
}
