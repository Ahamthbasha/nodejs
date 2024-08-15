const fs=require("fs")

const readableStream=fs.createReadStream(__filename);
readableStream.close()

readableStream.on("close",()=>{
    console.log("this is from readableStream close event callback")
})
setImmediate(()=>{
    console.log("immediate 1")
})
setTimeout(()=>{
    console.log("setTime out 1")
},0)

Promise.resolve().then(()=>{
    console.log("promise")
})
process.nextTick(()=>{
    console.log("next tick")
})