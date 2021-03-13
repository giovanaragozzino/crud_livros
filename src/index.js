//importa os módulos http e express
const http = require('http');
const express = require('express');
//constrói um objeto express
const app = express();
//importa o body-parser
const bodyParser = require('body-parser');
const { constants } = require('buffer');
app.use(bodyParser.json());
//configura a porta do servidor e o coloca em execução.
const porta = 3000;
app.set('port', porta);
const server = http.createServer(app);
server.listen(3000);

let id = 2;

let livros = [ 
    {
        id: 1,
        titulo: "Percy Jackson",
        descricao: "Livro de fantasia sobre semi deuses",
        edicao: "1",
        autor: "Rick Riordan",
        isbn: "7587"

    },
    {
        id: 2,
        titulo: "Harry Potter",
        descricao: "Livro de fantasia e magia",
        edicao: "2",
        autor: "J.K Rowlling",
        isbn: "9081"

    }    
];

app.get("/livros", (req, res, next) =>{
    res.status(201).json(livros);
})

app.post("/livros", (req, res, next) =>{
    const livro = {
        id: id += 1,
        titulo: req.body.titulo,
        descricao: req.body.descricao,
        edicao: req.body.edicao,
        autor: req.body.autor,
        isbn: req.body.isbn
    }
})

app.post("/livros", (req, res, next) =>{
    livros.forEach((livros)=>{
        if (livro.id === req.body.id) {
            livro.titulo = req.body.titulo,
            livro.descricao = req.body.descricao,
            livro.edicao = req.body.edicao,
            livro.autor = req.body.autor,
            livro.isbn = req.body.isbn
        }
    })
    res.status(200).json(livros);
})

app.delete("/livros", (req, res, next) =>{
    livros.forEach((livro, index) =>{
        if (livro.id === req.body.id) {
            const index = livros.indexOf(livro, 0)
            livros.splice(index, 1) 
        }
    })
    res.status(200).json(livros);
})