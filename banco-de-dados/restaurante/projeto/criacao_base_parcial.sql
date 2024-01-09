-- Active: 1704803504379@@127.0.0.1@3306

-- "ctrl + ;" comenta o código

-- CREATE DATABASE restaurante           --  cria o banco de dados
 --   DEFAULT CHARACTER SET = 'utf8mb4';

USE restaurante;                       -- seleciona qual banco vai usar

show tables;                           -- mostra todas as tabelas do banco de dados

-- DROP TABLE configs

CREATE TABLE configs(
    prod_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    valor VARCHAR(100) NOT NULL,
    criacao_data DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    alteracao_data DATETIME,
    exclusao_data DATETIME
);

-- ALTER TABLE configs ADD PRIMARY KEY (id);

SHOW COLUMNS FROM configs;

CREATE TABLE produtos(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    valor_unitario FLOAT NOT NULL,
    unidade_medida ENUM('Unidade', 'Quilo', 'Grama') NOT NULL,
    criacao_data DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    alteracao_data DATETIME,
    exclusao_data DATETIME
);

ALTER TABLE produtos CHANGE id prod_id;

SHOW COLUMNS FROM produtos;


CREATE TABLE pessoas(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(15) NOT NULL,
    cpf VARCHAR(11),
    rg VARCHAR(20),
    rg_expedidor VARCHAR(100),
    email VARCHAR(100),
    criacao_data DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    alteracao_data DATETIME,
    exclusao_data DATETIME
);

ALTER TABLE pessoas MODIFY COLUMN nome VARCHAR(125);

SHOW COLUMNS FROM pessoas;

CREATE TABLE atendimentos(
    atend_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    pessoas_id INT UNSIGNED NULL,
    mesa INT,
    pagaento_data DATETIME,
    valor_pedidos FLOAT,
    taxa_servico FLOAT,
    criacao_data DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    alteracao_data DATETIME,
    exclusao_data DATETIME,
    FOREIGN KEY (pessoas_id) REFERENCES pessoas(id)
);

ALTER TABLE atendimentos
CHANGE pagaento_data pagamento_data DATETIME;

SHOW COLUMNS FROM atendimentos;

CREATE TABLE pedidos(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    atendimentos_id INT UNSIGNED NULL,
    produtos_id INT UNSIGNED NULL,
    quantidade INT NOT NULL,
    valor_unitario FLOAT NOT NULL,
    situacao ENUM('Pedido', 'Produção', 'Entrega', 'Entregue') NOT NULL DEFAULT 'Entregue' ,
    saida_data DATETIME,
    entrega_data DATETIME,
    taxa_servico FLOAT,
    criacao_data DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    alteracao_data DATETIME,
    exclusao_data DATETIME,
    FOREIGN KEY (atendimentos_id) REFERENCES atendimentos(atend_id),
    FOREIGN KEY (produtos_id) REFERENCES produtos(id)
);

SHOW COLUMNS FROM pedidos;
