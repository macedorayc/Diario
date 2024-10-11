CREATE DATABASE db_diario;


use db_diario;

CREATE TABLE tb_usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nm_usuario VARCHAR(100),
    ds_senha VARCHAR(100)
);


CREATE TABLE tb_diario (
    id_diario INT PRIMARY KEY AUTO_INCREMENT,
    dt_dia DATE,
    ds_conteudo VARCHAR(400),
    id_usuario INT,
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario(id_usuario)
);
