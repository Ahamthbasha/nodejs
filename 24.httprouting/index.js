const http=require("node:http")
const server=http.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("homepage")
    }
    else if(req.url==="/about")
    {
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end("About page")
    }
    else if(req.url==="/api")
    {
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.end(JSON.stringify({
            firstname:"bruce",
            lastname:"wayne"
        }))
    }
    else{
        res.writeHead(404)
        res.end("page not found")
    }
})
server.listen(3000,()=>{
    console.log("3000 port")
})