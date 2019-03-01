function somar(numero1, numero2) {


    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'http://127.0.0.1:3000/pessoa', true);

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response)

        data.forEach(pessoa => {
            console.log(pessoa.nome)
        });
    }


    // Send request
    request.send();
}

function enviar() {
    var http = new XMLHttpRequest();
    let dado = {
        nome: 'teste'
    }

    http.open('POST', 'http://172.0.0.1:3000/somar', true, dado)

    http.onload = function () {
        console.log(this)
    }
}