const fs=require("node:fs")

const readableStream=fs.createReadStream("./18.streamreadwrite/text1.txt",{
    encoding:"utf-8",
})

const writeableStream=fs.createWriteStream("./18.streamreadwrite/text2.txt")

readableStream.on("data",(chunk)=>{
    console.log(chunk)
    writeableStream.write(chunk)
})