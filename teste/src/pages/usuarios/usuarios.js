function sair() {
    window.location.replace('./auth/sigin.html')
}

function voltar() {
    window.location.replace('../index.html')
}

function voltarUsuarios() {
    window.location.replace('listar-usuarios.html')
}

function adicionarUsuario() {
    window.location.replace('cadastrar-usuario.html')
}

function cadastrarUsuario() {
    console.log('clicou')
    nome = $("#nome").val();
    email = $("#email").val();
    senha = $("#senha").val();
    data_nascimento = $("#data_nascimento").val()
    instituicao = $("#instituicao").val();
    profissao = $("#profissao").val();
    $.post("http://127.0.0.1:3001/adicionar-usuario", {
        nome: nome,
        email: email,
        senha: senha,
        data_nascimento: data_nascimento,
        instituicao: instituicao,
        profissao: profissao
    }, function (data) {
        if (data === 'done') {
            alert("login success");
        }
    });

    this.limparCampos()
    alert('Salvou')

}

function limparCampos() {
    console.log('encapsulou')
    $("#nome").val('')
    $("#email").val('')
    $("#senha").val('')
    $("#data_nascimento").val('')
    $("#instituicao").val('')
    $("#profissao").val('')
}

function excluirUsuario() {
    var table = document.getElementById('usuarios');
    let email = ''

    for (var i = 1; i < table.rows.length; i++) {
        let teste = email

        table.rows[i].onclick = function () {
            //rIndex = this.rowIndex;
            teste = this.cells[1].innerHTML
            email = teste
            let aux = email

            $.post("http://127.0.0.1:3001/deletar-usuario", {
                email: aux
            }, function (data) {
                if (data === 'done') {
                    alert("login success");
                }
            });

        };

    }

}