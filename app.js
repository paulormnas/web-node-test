let express = require('express')
let app = express()
let engines = require('consolidate')
const fs = require('fs')
const port = 8080
const ip = '0.0.0.0'           // atualizar o ip antes de iniciar o servidor
const index = 'index.html'
const email_page = 'email.html'
const index_css = 'public/stylesheet/index.css'

app.use(express.static(__dirname + '/public'))
app.set('views', __dirname + '/public')
app.engine('html', engines.mustache)
app.set('view engine', 'html')

app.get('/', (req, res) => {
	res.render(index)
})

app.get('/email', (req, res) => {
	res.render(email)
})

app.listen(port, ip, () => {
	console.log('Servidor de pé em ' + ip + ':' + port)
})

// server = app.createServer((req, res) => {
//     console.log('Recebendo request \n' + req.url)
//     res.writeHead(200)
// 
//     if(req.url === '/'){
//         fs.readFile(index, (err, data) => {
//             if (err)
//                 throw err
//             else {
//                 res.end(data)
//             }
//         })
//     }
//     else if(req.url === '/email'){
//         fs.readFile(email_page, (err, data) => {
//             if (err)
//                 throw err
//             else {
//                 res.end(data)
//             }
//         })
//     }
//     else{
//         fs.readFile('public' + req.url, (err, data) => {
//             if (err)
//                 throw err
//             else {
//                 res.end(data)
//            }
//         })
//    }
// })

// server.listen(port, ip, () => {
//     console.log('Servidor de pé em ' + ip + ':' + port)
// })

// app.get('public/index.html', (res) =>{
//     console.log(res)
// }).on('error', (e) => {
//     console.error(`Got error: ${e.message}`)
// })