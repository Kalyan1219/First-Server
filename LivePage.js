const http=require('http')
http.createServer((req,res)=>{
    const url=req.url
    if(url==='/home'){
        return res.end("Welcome home")
    }
    if(url==='/about'){
        return res.end('Welcome to About Us Page')
    }
    if(url==='/node'){
        return res.end("Welcome to Node js project")
    }
}).listen(3000);