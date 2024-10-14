CREATE DATABASE db_diario;


use db_diario;

CREATE TABLE tb_usuario (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nm_usuario VARCHAR(100),
    ds_senha VARCHAR(100)
);


CREATE TABLE tb_diario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    dia DATE,
    conteudo VARCHAR(400),
    usuario INT,
    FOREIGN KEY (usuario) REFERENCES tb_usuario(id_usuario)
);

INSERT INTO tb_usuario (nm_usuario, ds_senha)
VALUE ('admin', '1234');


select * from tb_diario;
