import express from 'express'
import bancoDeDados from './repository/index.js'

const app = express()

app.get("/api/v1/cachorro/:id", (req, res) => {
    const id = req.params.id
    const cachorro = bancoDeDados.find(it => it.id == id)
    if (!cachorro) {
        res.send({ message: cachorro })
        return
    }
    res.send({ cachorro })
})
app.get("/api/v1/cachorro", (req, res) => {
    const { id, name, raca, idade } = req.query
    if (!id || !name || !raca || !idade) {
        res.send({ message: "favor informar um id ,nome , raça e idade " })
        return
    }
    bancoDeDados.push({
        id,
        name,
        raca,
        idade
    })
    console.log(bancoDeDados)
    res.send({ message: " cachorro criado com sucesso " })
})

app.get("/api/v1/deletar/:id", (req, res) => {
    const id = req.params.id
    const cachorro = bancoDeDados.find(it => it.id == id)
    if (!cachorro) {
        res.send({ message: "Favor informar id e name" })
        return
    }
    bancoDeDados.splice(it => it.id == id, 1)
    res.send({ message: "Pessoa deletada com sucesso" })
})
app.get("/api/v1/todos", (req, res) => {
    res.send({ cachorro: bancoDeDados })
})

app.listen(3000, () => {
    console.log("servidor ouvindo na porta 3000")
})