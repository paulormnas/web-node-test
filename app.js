let express = require('express')
let app = express()
const fs = require('fs')
const port = 8080
const ip = '0.0.0.0'           // atualizar o ip antes de iniciar o servidor

app.use(express.static(__dirname + '/public'))

app.get('/email', (req, res) => {
	fs.readFile(__dirname + '/public/email.html', (err, data) => {
		if(err)
			throw err
		else
			res.status(200).end(data)
	})
})

app.get('/test', (req, res) => {
  fs.readFile(__dirname + '/public/test.html', (err, data) => {
    if(err)
      throw err
    else
      res.status(200).end(data)
  })
})

app.get('/login', (req, res) => {
    fs.readFile(__dirname + '/public/login.html', (err, data) => {
        if(err)
            throw err
        else
            res.status(200).end(data)
    })
})

app.get('/login2', (req, res) => {
    fs.readFile(__dirname + '/public/login2.html', (err, data) => {
        if(err)
            throw err
        else
            res.status(200).end(data)
    })
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