function login() {
    let email = $("#email").val();
    let senha = $("#senha").val();

    console.log(email)
    console.log(senha)

    $.post("http://127.0.0.1:3001/login", {
        email: email,
        senha: senha
    }, function (data) {
        if (data === 'done') {
            alert("login success");
        }

    });
}

function cadastrar() {
    window.location.replace('cadastrar_usuario.html')
}