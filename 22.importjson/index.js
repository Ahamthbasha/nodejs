const http=require("node:http")
const fs=require("node:fs")
const server=http.createServer((req,res)=>{
   res.writeHead(200,{"Content-Type":"text/html"})
   const html=fs.readFileSync("./22.importjson/index.html","utf-8")
   res.end(html);
})
server.listen(3000,()=>{
    console.log("3000 port no")
})