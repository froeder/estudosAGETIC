const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require("body-parser");
const port = 3001;
const uuidv1 = require('uuid/v1');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster0-pmvpc.gcp.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, {
    useNewUrlParser: true
});
client.connect(err => {

    var db = client.db('test')


    client.close();
});

app.get('/', function (req, res) {
    res.send('Hellor Word');
    console.log(req)
})

app.post('/adicionar-usuario', function (req, res) {
    var id = uuidv1()
    var nome = req.body.nome
    var email = req.body.email
    var senha = req.body.senha
    var data_nascimento = req.body.data_nascimento
    var instituicao = req.body.instituicao
    var profissao = req.body.profissao

    const dado = {
        id: id,
        nome: nome,
        email: email,
        senha: senha,
        data_nascimento: data_nascimento,
        instituicao: instituicao,
        profissao: profissao
    }
    console.log(dado)
    const uri = "mongodb+srv://admin:admin@cluster0-pmvpc.gcp.mongodb.net/test?retryWrites=true";
    const client = new MongoClient(uri, {
        useNewUrlParser: true
    });
    client.connect(err => {
        const collection = client.db("test").collection("usuarios");
        collection.insertOne(dado)
        client.close();
    });
    res.send('OK')

})

app.get('/exibir-usuarios', function (req, res) {
    const uri = "mongodb+srv://admin:admin@cluster0-pmvpc.gcp.mongodb.net/test?retryWrites=true";
    const client = new MongoClient(uri, {
        useNewUrlParser: true
    });
    client.connect(err => {
        client.db("test").collection("usuarios").find({}).toArray(function (error, documents) {
            if (err) throw error;
            console.log(documents)
            res.send(documents);
        });

        client.close()
    });
})

app.get('/visualizar-usuario', function (req, res) {
    console.log('Visualizar usuário')
})

app.put('/atualizar-usuario', function (req, res) {
    console.log('Atualizar usuário')
})

app.delete('/deletar-usuario', function (req, res) {
    console.log('Deletar usuário')
})


app.listen(port, () => console.log(`Server runing on port ${port}`));