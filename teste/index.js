function adicionar() {
    console.log('clicou')
    nome = $("#nome").val();
    email = $("#email").val();
    senha = $("#senha").val();
    data_nascimento = $("#data_nascimento").val()
    $.post("http://127.0.0.1:3001/adicionar-usuario", {
        nome: nome,
        email: email,
        senha: senha,
        data_nascimento: data_nascimento
    }, function (data) {
        if (data === 'done') {
            alert("login success");
        }
    });

    this.limpar()
    alert('Salvou')
}

function limpar() {
    console.log('encapsulou')
    $("#nome").val('')
    $("#email").val('')
    $("#senha").val('')
    $("#data_nascimento").val('')
}

function exibir() {
    window.location.replace('exibir-usuarios.html')
}