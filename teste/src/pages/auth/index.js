function confereSenha(senha_cliente, senha_servidor) {
    if (senha_cliente == senha_servidor) {
        console.log('Igual')
        window.location.replace('../index.html')
    } else {
        console.log('Diferentes')
        alert('Senha Incorreta')
        this.limparSenha()
    }
}

function login() {
    let email = $("#email").val();
    let senha = $("#senha").val();

    axios.post("http://127.0.0.1:3001/login", {
            email: email,
            senha: senha
        }).then(function (response) {
            let dados = response.data[0]

            console.log(dados)
            this.confereSenha(senha, dados.senha)
        })
        .catch(function (error) {
            console.log(error);
        });
}

function cadastrar() {
    window.location.replace('cadastrar_usuario.html')
}

function limparSenha() {
    let senha = $("#senha").val('')
}