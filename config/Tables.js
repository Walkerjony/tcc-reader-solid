var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reader"
});
con.connect(function(err) {
    if (err) throw err;
        var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(60), username VARCHAR(60), email VARCHAR(60) UNIQUE, senha VARCHAR(60), imagem VARCHAR(255))";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Tabela users criada");
    });
    con.end();
});
