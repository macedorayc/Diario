import con from "./connection.js";

export async function getDiario(idUsuario) {
    let comando = `SELECT * FROM tb_diario WHERE usuario = ?`;
    let resultado = await con.query(comando, [idUsuario]);

    let info = resultado[0]; 
    return info;
}

export async function postDiario(segredo) {
    let comando = `INSERT INTO tb_diario (dia, conteudo, usuario) VALUES (?, ?, ?)`;
    let resultado = await con.query(comando, [segredo.data, segredo.conteudo, segredo.usuario]);
    let info = resultado[0];

    return info.insertId;
}

export async function updateDiario(segredo, id) {
    let comando = `UPDATE tb_diario SET dia = ?, conteudo = ? WHERE diario = ?`;
    let resultado = await con.query(comando, [segredo.data, segredo.conteudo, id]);
    let info = resultado[0];

    return info.affectedRows;
}

export async function deleteDiario(id) {
    let comando = `DELETE FROM tb_diario WHERE usuario = ?`;
    let resultado = await con.query(comando, [id]);
    let info = resultado[0];

    return info.affectedRows;
}
