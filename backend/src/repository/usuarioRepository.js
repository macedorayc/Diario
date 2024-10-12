import con from "./connection.js";

export async function inserirUsuario(pessoa) {
    const comando = `
        INSERT INTO tb_usuario (nm_usuario, ds_senha) 
        VALUES (?, ?)
    `;
    
    let resposta = await con.query(comando, [pessoa.nome, pessoa.senha]);
    let info = resposta[0];
    
    return info.insertId;
}

export async function validarUsuario(pessoa) {
    const comando = `
        SELECT 
            id_usuario AS id,
            nm_usuario AS nome
        FROM tb_usuario 
        WHERE 
            nm_usuario = ?
            AND ds_senha = ?
    `;
    
    let registros = await con.query(comando, [pessoa.nome, pessoa.senha]);
    return registros[0][0];
}
