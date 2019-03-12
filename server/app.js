const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testes"
});

connection.connect();

app.get("/", function (req, res) {
    res.send("Hellor Word");
    console.log(req);
});

app.post("/adicionar-usuario", function (req, res) {
    var id = uuid();
    var nome = req.body.nome;
    var email = req.body.email;
    var senha = req.body.senha;
    var data_nascimento = req.body.data_nascimento;
    var instituicao = req.body.instituicao;
    var profissao = req.body.profissao;

    connection.query(
        "INSERT INTO `usuarios`(`id`,  `nome`,`email`, `senha`, `data_nascimento`, `instituicao`, `profissao`) VALUES ('" +
        id +
        "','" +
        nome +
        "','" +
        email +
        "','" +
        senha +
        "','" +
        data_nascimento +
        "','" +
        instituicao +
        "','" +
        profissao +
        "')",
        function (err, result) {
            if (err) throw err;
            console.log([{
                id: id,
                nome: nome,
                email: email,
                senha: senha,
                data_nascimento: data_nascimento
            }]);
            res.send("Dado adicionado com sucesso");
        }
    );
});

app.get("/exibir-usuarios", function (req, res) {
    connection.query("SELECT * FROM usuarios", function (err, rows, fields) {
        if (err) throw err;
        res.send(rows);
    });
});

app.get("/visualizar-usuario", function (req, res) {
    console.log("Visualizar usuário");
});

app.put("/atualizar-usuario", function (req, res) {
    console.log("Atualizar usuário");
});

app.post("/deletar-usuario", function (req, res) {
    var email = req.body.email;
    connection.query("DELETE FROM usuarios WHERE email = '" + email + "'", function (err, row, field) {
        if (err) {
            throw err
            res.send('ERRO')
        } else {
            res.send('OK')
        }

    })

});

app.post("/login", function (req, res) {
    var email = req.body.email;
    var senha = req.body.senha;

    connection.query(
        "SELECT * FROM usuarios WHERE email LIKE '" + email + "'",
        function (err, rows, fields) {
            if (err) {
                throw err;
                res.send(err)
            }
            console.log(rows);

            res.send(rows)
        }
    );

});

app.listen(port, () => console.log(`Server runing on port ${port}`));