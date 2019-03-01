const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");
const port = 3000

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja'
});

connection.connect()

app.get('/banco', function (req, res) {
    connection.query('SELECT * from express_teste', function (err, rows, fields) {
        if (err) throw err
        connection.end()

        console.log(rows)
    })
})

app.get('/insere-banco', function (req, res) {
    var id = req.body.id;
    var nome = req.body.nome;
    var descricao = req.body.descricao
    connection.query('INSERT INTO express_teste (id, nome, descricao) VALUES (' + id + ', "' + nome + '" ,' + '"' + descricao + '"' + ')',
        function (err, result) {
            if (err) throw err;
            res.send('User added to database');
        }
    )
})

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/somar', function (req, res) {
    var teste = req.params;
    console.log(teste)
})

app.post('/login', function (req, res) {
    var user_name = req.body.user;
    var password = req.body.password;
    console.log("User name = " + user_name + ", password is " + password);
    res.end("yes");
});

app.get('/users', function (req, res) {
    res.send(req)
})

app.get('/pessoa', function (req, res) {
    let pessoa = []
    pessoa.push({
        nome: 'teste1'
    })
    pessoa.push({
        nome: 'teste2'
    })
    pessoa.push({
        nome: 'teste4'
    })
    pessoa.push({
        nome: 'teste5'
    })
    res.send(pessoa)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))