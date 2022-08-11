const http = require('http')
const PORT = '1996'

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json')
        res.writeHead(200)

        return res.end(
            JSON.stringify({
                message: `You have used GET method with the url: ${req.url}`
            })
        )
    }

    res.end()
})

server.listen(PORT, () => {
    console.log(`Server running at port: ${PORT}`)
})