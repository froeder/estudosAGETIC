function sair() {
    window.location.replace('./auth/sigin.html')
}

function criaTabela(dado) {
    dado.forEach(dados => {
        tr = $("<tr/>");
        tr.append("<td>" + dados.nome + "</td>");
        tr.append("<td>" + dados.email + "</td>");
        tr.append("<td>" + dados.senha + "</td>");
        tr.append("<td>" + dados.data_nascimento + "</td>");
        tr.append("<td>" + dados.profissao + "</td>");
        tr.append("<td>" + dados.instituicao + "</td>");
        tr.append('<td> <span class="btn btn-primary" >Editar</span> </td>');
        $("table").append(tr);
    });
}

function exibirUsuarios() {
    console.log('clique')
    axios.get("http://127.0.0.1:3001/exibir-usuarios", {

        }).then(function (response) {
            let dados = response.data

            this.criaTabela(dados)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function voltar() {
    window.location.replace('../index.html')
}