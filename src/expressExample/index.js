const express = require('express')

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send({
        message: 'Hola express callampero!'
    })
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})