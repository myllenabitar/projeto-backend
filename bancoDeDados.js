const mongoose = require('mongoose')

async function conectaBancoDeDados (){
    try{
        console.log('Conexão com o banco de dados iniciou')

        await mongoose.connect('mongodb+srv://myllenabitar:PlFLFkOrx4JeiAqS@cluster0.zd6hqkq.mongodb.net/?retryWrites=true&w=majority')

        console.log('Conexão com o banco de dados feita com sucesso!')
    } catch(erro){
        console.logo(erro)
    }

}

module.exports = conectaBancoDeDados