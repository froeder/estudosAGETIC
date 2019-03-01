function Pessoa(dados) {

    this.nome = dados.nome
    this.senha = dados.senha
    this.idade = dados.idade
    this.getNome = function () {
        return this.nome.value
    }
    this.getSenha = function () {
        return this.senha.value
    }
    this.getAlerta = function () {
        alert('Usuário ' + this.nome.value + ' cadastrado com sucesso!');
    }
    this.getIdade = function () {
        return this.idade.value
    }
}

function cadastro() {
    var nome = document.getElementById('input-nome');


    var senha = document.getElementById('input-senha');

    var idade = document.getElementById('input-idade')

    var dados = {
        'nome': nome,
        'senha': senha,
        'idade': idade
    }

    var pessoa1 = new Pessoa(dados)

    var idade = pessoa1.getIdade()
    console.log(idade)

}

function somar(numero, total) {
    return numero + total
}