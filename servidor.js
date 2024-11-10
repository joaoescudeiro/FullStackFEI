let http = require('http');
let express = require('express');
var colors = require('colors');
let bodyParser = require("body-parser");
let mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://joao:D1Kk2HFjgICw0NjC@cluster0.ndksp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri, { useNewUrlParser: true });

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


// app.post('/cadastro', function (requisicao, resposta) {
//     var nome = requisicao.body.nome;
//     var sobrenome = requisicao.body.sobrenome;
//     var nascimento = requisicao.body.nascimento;
//     var usuario = requisicao.body.usuario;
//     var senha = requisicao.body.senha;

//     resposta.render('resposta', { nome, sobrenome, nascimento, usuario, senha })
// })

app.post("/cadastro", function (req, resp) {
    // salva dados no banco
    client.db("exemplo_bd").collection("usuarios").insertOne(
        {
            db_nome: req.body.nome,
            db_login: req.body.usuario,
            db_senha: req.body.senha
        }, function (err) {
            if (err) {
                resp.render('resposta_erro_cadastro', { resposta: "Erro ao cadastrar usuário!" })
            } else {
                var usuario = req.body.usuario;
                var senha = req.body.senha;
                resp.render('resposta', { usuario, senha })
            };
        });
});

// app.post('/logar', function (requisicao, resposta) {
//     var usuario = requisicao.body.usuario;
//     var senha = requisicao.body.senha;

//     resposta.render('resposta', { usuario, senha })
// })

app.post("/logar", function (req, resp) {
    // busca um usuário no banco de dados
    client.db("exemplo_bd").collection("usuarios").find(
        {
            db_login: req.body.usuario,
            db_senha: req.body.senha
        }).toArray(function (err, items) {
            console.log(items);
            if (items.length == 0) {
                resp.render('resposta_erro_login', { resposta: "Usuário/senha não encontrado!" })
            } else if (err) {
                resp.render('resposta_erro_login', { resposta: "Erro ao logar usuário!" })
            } else {
                var usuario = req.body.usuario;
                var senha = req.body.senha;
                resp.render('resposta', { usuario, senha })
            };
        });
});

// Funcoes Exemplo bd

app.get('/cadastrar_livro', function (req, res) {
    let nome = req.query.cadastra_nome
    let autor = req.query.cadastra_autor
    let isbn = req.query.cadastra_isbn
    let editora = req.query.cadastra_editora
    let data = req.query.cadastra_data

    res.render('respostabd', { nome, autor, isbn, editora, data })
})


app.get('/blog', async function (requisicao, resposta) {
    try {
        const posts = await client.db("blog_db").collection("posts").find().toArray();
        resposta.render('blog', { posts });
    } catch (err) {
        console.error('Erro ao buscar posts:', err);
        resposta.render('resposta_erro_cadastro', { resposta: "Erro ao carregar posts!" });
    }
});

app.get('/criar', function (requisicao, resposta) {
    resposta.render('criarpost')
})


app.post("/criarpost", async function (req, resp) {
    try {
        await client.db("blog_db").collection("posts").insertOne({
            titulo: req.body.titulo,
            resumo: req.body.resumo,
            conteudo: req.body.conteudo
        });
        resp.redirect('/blog'); // Redirecionar para ver todos os posts
    } catch (err) {
        console.error('Erro ao criar post:', err);
        resp.render('resposta_erro_cadastro', { resposta: "Erro ao criar post!" });
    }
});

