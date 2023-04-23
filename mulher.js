const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response){
    response.json({
        nome: 'myllena de souza bitar',
        imagem:'https://www.linkedin.com/in/myllena-de-souza-bitar-272213140/',
        minibio:'Dentista e desenvolvedora'
})
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)