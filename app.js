const fs = require('fs')
const app = require('http')
const port = 8080
const ip = '192.168.0.13'           // atualizar o ip antes de iniciar o servidor
const index = 'public/index.html'
const email_page = 'public/email.html'
const index_css = 'public/stylesheet/index.css'

server = app.createServer((req, res) => {
    console.log('Recebendo request \n' + req.url)
    res.writeHead(200)

    if(req.url === '/'){
        fs.readFile(index, (err, data) => {
            if (err)
                throw err
            else {
                res.end(data)
            }
        })
    }
    else if(req.url === '/email'){
        fs.readFile(email_page, (err, data) => {
            if (err)
                throw err
            else {
                res.end(data)
            }
        })
    }
    else{
        fs.readFile('public' + req.url, (err, data) => {
            if (err)
                throw err
            else {
                res.end(data)
            }
        })
    }
})

server.listen(port, ip, () => {
    console.log('Servidor de pé em ' + ip + ':' + port)
})

// app.get('public/index.html', (res) =>{
//     console.log(res)
// }).on('error', (e) => {
//     console.error(`Got error: ${e.message}`)
// })
