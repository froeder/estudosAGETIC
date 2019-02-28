var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'loja'
});

connection.connect()

connection.query('SELECT * FROM categorias', function (err, rows, fields) {
    if (err) throw err

    console.log(rows)

})

connection.end()