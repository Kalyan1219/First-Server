const fs=require('fs')
const RequestHandler=(req,res)=>{
    const url=req.url
    const method=req.method
    if(url==='/'){
        fs.readFile("CreatedFile.txt",{encoding:'utf-8'},(err,data)=>{
            if(err){
                console.log(err)
            }
            res.write('<html>')
            res.write('<head><title>"FORM MESSAGE"</title></head>');
            res.write(`<body>${data}</body>`)
            res.write(`<body><form action="/message" method="POST"><input type="text" name="Message"><button type="submit">Send</button></form></body>`);
            res.write('</html>')
            return res.end()
    
        })
    }
    if(url==='/message' && method==='POST'){
        const body=[]
        req.on('data',(chunck)=>{
            body.push(chunck);
            // console.log(chunck)
        })
        return req.on('end',()=>{
            const parsedBody= Buffer.concat(body).toString()
            const message=parsedBody.split('=')[1]
            fs.writeFile("CreatedFile.txt",message,(err)=>{
                res.statusCode=302;
                res.setHeader('LOCATION','/')
                return res.end()
            });
        })
    }
}
module.exports=RequestHandler;