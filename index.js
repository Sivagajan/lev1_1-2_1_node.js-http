import fs from 'fs'
import http from 'http'

const openPage = (path, response) => {
    fs.readFile(path, (err,data) =>{
        if(err){
            response.end('error')
            return
        }else{
            response.end(data.toString())
        }
    })
}

const server = http.createServer((req, res) => {
    console.log('Rquest: ', req.method, req.url)

    if(req.url === '/index.html' || req.url === '/' ){

            openPage('./assets/index.html', res)

    }else{
            const filePath = "./assets" + req.url
            openPage(filePath, res)
        } 
        
    if(req.url === '/about.html') {
        
        openPage('./assets'+req.url, res)
    }
    else if (req.url === '/contact.html'){
        openPage('./assets'+req.url, res)
    }
    else if (req.url === '/faq.html'){
        openPage('./assets'+req.url, res)
    }
})

server.listen(9898, console.log('der Server läuft'))