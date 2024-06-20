
const { PrismaClient } = require('@prisma/client')
const express = require('express')
const app = express()
const port = 3000
const prisma = new PrismaClient()
app.use(express.json())


app.get("/pag", (req, res) => {
    res.sendFile(__dirname + "/avali.html")
})



app.delete("/api/delete/:id", async (req, res) => {
    try {
        console.log(req.params.id);
        if (!req.params.id) return res.status(404).end()

        await prisma.tabelapaiosa.delete({
            where: {
                id: parseInt(req.params.id)
            },
        })


        res.status(204).send("tabela removida")
    } catch (error) {
        console.error(error);
        res.status(500).json(error)
    }
})

app.post('/api/criar', async (req, res) => {


    try {
        await prisma.tabelapaiosa.create({
            data: req.body
        })

        res.status(201).send("tabela add")
    } catch (error) {
        res.status(500).json(error)
    }
})

app.get('/api/getAll', async (req, res) => {
    try {
        const response = await prisma.tabelapaiosa.findMany({
            orderBy: { id: 'desc' }
        })

        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})