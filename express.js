// Primeiros passos com o express
var express = require('express');
var app = express();

// Passando arquivo HTML
app.get("/", function (req, res){
    res.sendFile(__dirname + "/html/index.html");
})

app.get("/sobre", function (req, res){
    res.sendFile(__dirname + "/html/sobre.html");
})

// Passando parametros
// app.get("/ola/:nome/:cargo", function (req, res){
//     res.send(req.params);
// })

app.get("/ola/:nome/:cargo", function (req, res){
    res.send("Olá" + req.params.nome + req.params.cargo);
})

// Setando a rota - sempre ao final
app.listen(8081, function (){
    console.log('Rodando!')
});
