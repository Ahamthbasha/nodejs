/*server created
const http=require("http")
const server=http.createServer((req,res)=>{
    res.end("server created")
})
server.listen(3000,()=>{
    console.log("server is running")
})
//client address
const express=require("express")
const app=express()
app.get("/",((req,res)=>{
    res.send("helloworld")
}))
app.listen(3000,()=>{
    console.log("server is running")
})
//cli
console.log("directory",__dirname)
console.log("file name",__filename)
//process object
console.log(process.argv)//path,script
console.log(process.cwd())
console.log(process.pid)
console.log(process.version)
console.log(process.memoryUsage())
console.log(process.uptime())
console.log("environment variables",process.env)
//module common js
const calc=require("./math")
const sum=calc.add(2,4);
const sub=calc.sub(2,2);
console.log(sum)
console.log(sub)

import {add,sub} from "./math.mjs"
const sum=add(4,1)
const subt=sub(1,1)
console.log(sum)
console.log(subt)

//nodemon

const express=require("express")
const app=express()
app.get("/",((req,res)=>{
    res.send("hello world")
}))
app.listen(3000)
console.log("server started.press ctrl+c to stop")
setInterval(()=>{
    console.log("server running is rrunning ")
},1000)


//fsmodule
//write
const fs=require("fs");
fs.writeFile("word.txt","hello world",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("writed")
    }
})
//read
const fs=require("fs")
fs.readFile("word.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

//async write and read

const fs=require("fs")
fs.writeFileSync("word2.txt","hello node js")
console.log("written")
const data=fs.readFileSync("word2.txt","utf-8")
console.log(data)

//http module

const http=require("http")
const server=http.createServer((req,res)=>{
    //set status code and header
    res.writeHead(200,{"Content-Type":"text/plain"})
    //streaming large amount of data chunk by chunk
    res.write("hello this is a secure server\n")
    res.write("hello node.js\n")
    res.write("hello\n")
    //response ended
    res.end("goodbye")
})
server.listen(3000,()=>{
    console.log("server is running")
})

const os=require("os")
console.log(os.platform())
console.log(os.arch())
console.log(os.release())

const path = require('path');

const filePath = '/users/john/documents/file.txt';

const joinedpath=path.join("users","john","document","file.txt")
const resolvedpath=path.resolve("users","john","document","file.txt")
const baseName=path.basename(filePath)
console.log(joinedpath)
console.log(resolvedpath)
console.log(baseName)
//readable stream
const fs=require("fs")
const readableStream=fs.createReadStream("word.txt",{encoding:"utf-8"})
readableStream.on("data",(chunk)=>{
    console.log(chunk)
})
readableStream.on("end",()=>{
    console.log("end of the program")
})
readableStream.on("error",(err)=>{
    console.log(err)
})
//writable stream
const fs=require("fs")
const writableStream=fs.createWriteStream("output.txt",{encoding:"utf-8"})
writableStream.write("hello world")
writableStream.write("i am learning node js")
writableStream.end(()=>{
    console.log("end")
})
writableStream.on("error",(err)=>{
    console.log("an error occured:",err)
})

//duplex

const {Duplex}=require("stream")
const DuplexStream=new Duplex({
    read(size){
        this.push("hello from readable stream")
        this.push(null)
    },
    write(chunk,encoding,callback){
        console.log("received",chunk.toString())
        callback()
    }
})
DuplexStream.write("hello world i am learning node js")
DuplexStream.on("data",(chunk)=>{
    console.log("read data",chunk.toString())
})
DuplexStream.on("end",()=>{
    console.log("finished processing the stream")
})
DuplexStream.on("err",(err)=>{
    console.log("an error occured",err)
})

//Transform

const { Transform }=require("stream")
const fs=require("fs")
const UppercaseTransform = new Transform({
    transform(chunk,encoding,callback){
        this.push(chunk.toString().toUpperCase())
        callback()
    }
})
const readableStream=fs.createReadStream("word.txt",{encoding:"utf-8"})
const writableStream=fs.createWriteStream("output.txt")
readableStream.pipe(UppercaseTransform).pipe(writableStream)
console.log("data is being transformed and written to output.txt")

//create read stream 
const fs=require("fs")
const readableStream=fs.createReadStream("word.txt",({encoding:"utf-8"}))
readableStream.on("data",(chunk)=>{
    console.log("received chunk",chunk)
})

//pipe
const fs=require("fs")
const readableStream=fs.createReadStream("word.txt",({encoding:"utf-8"}))
const writableStream=fs.createWriteStream("word2.txt")
readableStream.pipe(writableStream)
console.log("data is sended")

//exec

const {exec}=require("child_process")
const command="dir"
exec(command,(error,stdout,stderr)=>{
    if(error){
        console.log(`${error}`)
        return;
    }
    if(stderr){
        console.log(`${stderr}`)
        return;
    }
    console.log(`${stdout}`)
})

//execFile
const {execFile}=require("child_process")
const path=require("path")
const scriptPath=path.join(__dirname,"script.js")
execFile("node",[scriptPath],(error,stderr,stdout)=>{
    if(error){
        console.log(`${error}`)
        return;
    }
    if(stderr){
        console.log(`${stderr}`)
        return;
    }
    console.log(`${stdout}`)
})

//spawn

const {spawn}=require("child_process")
const dir=spawn("cmd.exe",["/c","dir"])
dir.stdout.on("data",(data)=>{
    console.log(`${data}`)
})
dir.stderr.on("data",(data)=>{
    console.log(`${data}`)
})
dir.on("close",(code)=>{
    console.log(`${code}`)
})*/