use bd_estoque;

DROP TABLE IF EXISTS estoque;
DROP TABLE IF EXISTS usuario;

CREATE TABLE IF NOT EXISTS usuario(
    id_user INT NOT NULL AUTO_INCREMENT,
    nome_usuario VARCHAR(50) NOT NULL,
    login_usuario VARCHAR (20) NOT NULL,
    senha VARCHAR(255) NOT NULL,
    PRIMARY KEY(id_user)
);

CREATE TABLE IF NOT EXISTS estoque(
    id INT NOT NULL AUTO_INCREMENT,
    produto_estoque VARCHAR(50) NOT NULL,
    preco_estoque FLOAT NOT NULL,
    quant_estoque INT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO usuario(nome_usuario, login_usuario, senha) VALUES('Estoquista 01', "est01", "adm123");