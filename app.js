//REQUERIR OS MÓDULOS DO NODE.JS
var express = require("express");
const app = express();
var mysql = require("mysql");
const portaServidor = 3000;

// CONECTAR AO BANCO DE DADOS
var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user",
    database: "bd_estoque"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Conectado!");
});

//CONFIGURAR A VISUALIZAÇÃO
app.set("view engine", "ejs"); //chamando o motor de visualização
app.set("views", __dirname, "/views"); //definindo qual diretório está o motor de visualização
app.use(express.urlencoded({ extended: true })); //permite que os dados passem de uma página pra outra;
app.use(express.json()); //transportado através do formato json;
app.use(express.static("public"));

//CRIAR ROTA PARA RENDERIZAR A PÁGINA PRINCIPAL
app.get("/", (req, res) => {
    res.send("Página inicial")
});

//ROTA PARA RENDERIZAR A PÁGINA DO ESTOQUE
app.get("/estoque", (req, res) => {    
    con.query(`SELECT * FROM estoque`, (err, item) => {
        // if (err) {
        //     return res.status(500).send("Erro ao consultar estoque");
        // }
        res.render("estoque", {lista_produtos: item});
    });
});

//ROTA PARA RENDERIZAR A PÁGINA DE CADASTRO DE PRODUTOS NO ESTOQUE
app.get("/cadastrarProduto", (req, res) => {
    res.render("cadastrarProduto");
});

//MÉTODO POST PARA SALVAR OS ITENS CADASTRADOS NO BANCO DE DADOS;
app.post("/cadastrarProduto", (req, res) => {    
    const {produto_estoque, preco_estoque, quant_estoque} = req.body;
    var sql = `INSERT INTO estoque(produto_estoque, preco_estoque, quant_estoque) VALUES('${produto_estoque}', '${preco_estoque}', '${quant_estoque}');`;

    con.query(sql, function (err, result) {
        resultado = result;
        console.log(resultado);
        if (err) throw err;
        res.redirect("/estoque");
    });
});

//ROTA PARA RENDERIZAR A PÁGINA DE EDIÇÃO DE PRODUTO NO ESTOQUE
app.get("/editarProduto/:id", (req, res) => {
    let id = req.params.id;
    var sql = `SELECT * FROM estoque WHERE id = ${id};`;
    con.query(sql, function (err, result) {
            if (err) {
                return res.status(500).send("Erro ao consultar estoque");
            }
            res.render("editarProduto", { lista_produtos: result[0] })
        });
});

//ROTA PARA ENVIAR A EDIÇÃO DE PRODUTO NO ESTOQUE
app.post("/editarProduto/", (req, res) => {
    const {produto_estoque, preco_estoque, quant_estoque, id} = req.body;  
    con.query(`UPDATE estoque SET produto_estoque='${produto_estoque}', preco_estoque=${preco_estoque}, quant_estoque=${quant_estoque} WHERE id = ${id} ;`, (err, resultado) => {
        console.log(resultado);
        if (err) throw err;
        return res.redirect("estoque");
    });
});

//ROTA PARA DELETAR A EDIÇÃO DE PRODUTO NO ESTOQUE
app.get("/deletarProduto/:id", (req, res)=>{
    let id = req.params.id;
    var deletar = `DELETE FROM estoque WHERE id = ${id};`
    con.query(deletar, id, (err, result)=>{
        if(err) throw err;
    })
    res.redirect("/estoque");
})

// CHECAR EM QUE PORTA A APLICAÇÃO IRÁ RODAR;
app.listen(portaServidor, () => {
    console.log("Servidor rodando na porta ", portaServidor)
});