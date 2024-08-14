const fs=require("node:fs");

const readableStream=fs.createReadStream("./19.pipe/text1.txt",{
    encoding:"utf-8",
})

const writableStream=fs.createWriteStream("./19.pipe/text2.txt")

readableStream.pipe(writableStream)