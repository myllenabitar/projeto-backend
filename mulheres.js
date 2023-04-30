const express = require("express") //aqui estou iniciando o express
const router = express.Router() //aqui estou configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid');
const app = express() // aqui estou iniciando o app
app.use(express.json())
const porta = 3333 // aqui estou criando a porta

// aqui estou criando a lista inicial de mulheres
const mulheres = [
    {
        id:'1',
        nome: 'myllena de souza bitar',
        imagem:'https://www.linkedin.com/in/myllena-de-souza-bitar-272213140/',
        minibio:'Dentista e desenvolvedora'
    },
    {
        id:'2',
        nome: 'myllena de souza bitar',
        imagem:'https://www.linkedin.com/in/myllena-de-souza-bitar-272213140/',
        minibio:'Dentista e desenvolvedora'
    },
    {
        id:'3',
        nome: 'myllena de souza bitar',
        imagem:'https://www.linkedin.com/in/myllena-de-souza-bitar-272213140/',
        minibio:'Dentista e desenvolvedora'
    }
]

//GET
function mostraMulheres(request, response){
    response.json(mulheres)
}

//post
function criaMulher(request, response){
    const novaMulher = {
        id:uuidv4(),
        nome: request.body.name,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }
    mulheres.push(novaMulher)

    response.json(mulheres)
}
//patch
function corrigeMulher(request, response){
    function encontrarMulher(mulher){
        if (mulher.id === request.params.id){
            return mulher
        }
    }
    const mulherEncontrada = mulheres.find(encontrarMulher)
    if (request.body.nome){
        mulherEncontrada.nome = request.body.nome
    }
    if (request.body.minibio){
        mulherEncontrada.minibio = request.body.minibio
    }
    if (request.body.imagem){
        mulherEncontrada.imagem = request.body.imagem
    }
    response.json(mulheres)
}
//delete
function deletaMulheres(request, response){
    function todasMenosEla(mulher){
        if(mulher.id === request.params.id){
            return mulher
        }
    }
    const mulheresQueFicam = mulheres.filter(todasMenosEla)

    response.json(mulheresQueFicam)
}
//porta
function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))// configurei a rota GET /mulheres.
app.use(router.post('/mulheres', criaMulher)) //configurei rota porta /mulheres.
app.listen(porta, mostraPorta) //servidor ouvindo a porta.
app.use(router.patch('/mulheres/:id', corrigeMulher))//config rota patch em /mulheres:id
app.use(router.delete('/mulheres/:id', deletaMulheres)) //config rota delete em /mulheres:id