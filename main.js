function Pessoa(dados) {

    this.nome = dados.nome
    this.senha = dados.senha

    this.getNome = function () {
        return this.nome.value
    }
    this.getSenha = function () {
        return this.senha.value
    }
    this.alerta = function () {
        alert('Usuário ' + this.nome.value + ' cadastrado com sucesso!');
    }
}

function cadastro() {
    var nome = document.getElementById('input-nome');


    var senha = document.getElementById('input-senha');

    var dados = {
        'nome': nome,
        'senha': senha
    }

    var pessoa1 = new Pessoa(dados)

    pessoa1.alerta()

}