let http = require('http');
let express = require('express');
var colors = require('colors');
let bodyParser = require("body-parser");

var app = express();
app.use(express.static('./public/', { index: 'projects.html' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', './views');
// app.use(express.static('./public'));

var server = http.createServer(app);
server.listen(80);

console.log('Servidor rodando...'.rainbow);


app.get('/cadastra', function (requisicao, resposta) {
    resposta.redirect('projpostget/Cadastro.html')
})

app.get('/login', function (requisicao, resposta) {
    resposta.redirect('projpostget/Login.html')
})

app.get('/inicio', function (requisicao, resposta) {
    var nome = requisicao.query.info;
    console.log(nome);
    resposta.redirect('projects.html')
})

// app.post('/inicio', function (requisicao, resposta) {
//     var data = requisicao.body.data;
//     console.log(data);
// })

// usa requisicao.body.nome; no post e requisicao.query.nome; no get


app.post('/cadastro', function (requisicao, resposta) {
    var nome = requisicao.body.nome;
    var sobrenome = requisicao.body.sobrenome;
    var nascimento = requisicao.body.nascimento;
    var usuario = requisicao.body.usuario;
    var senha = requisicao.body.senha;

    resposta.render('resposta', { nome, sobrenome, nascimento, usuario, senha })
})

app.post('/logar', function (requisicao, resposta) {
    var usuario = requisicao.body.usuario;
    var senha = requisicao.body.senha;

    resposta.render('resposta', { usuario, senha })
})