// Criando um servidor simples com Node.JS

var http = require('http');
// http.createServer().listen(8081)

http.createServer(function (req, res){
    res.end('Ola cria');
}).listen(8081);

console.log("Servidor rodando!");