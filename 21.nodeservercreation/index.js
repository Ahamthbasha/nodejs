const http=require("node:http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{"content-Type":"text/plain"})
    res.end("hello world")
})
server.listen(3000,()=>{
    console.log("server runnng at port 3000")
})
