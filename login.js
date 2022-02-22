const mysql = require("mysql");
const express = require("express");
const app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "user",
    password: "user",
    database: "bd_estoque"
});

con.connect(function(error){
    if(error) throw error
    else console.log("Conectado ao banco de dados")
});

app.get("/")