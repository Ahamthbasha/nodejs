const fs=require("node:fs")
const zlib=require("node:zlib")
const gzip=zlib.createGzip()
const readableStream=fs.createReadStream("./20.pipechaining/text1.txt",{
    encoding:"utf-8"
})
readableStream.pipe(gzip).pipe(fs.WriteStream("./20.pipechaining/text2.txt.gz"))
const writableStream=fs.createWriteStream("./20.pipechaining/text2.txt")

readableStream.pipe(writableStream)