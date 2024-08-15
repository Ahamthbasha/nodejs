const fs=require("fs")

fs.readFile("__filename",()=>{
    console.log("this is readFile")
    setImmediate(()=>{
        console.log("this is setTimeout 1")
    })
})
process.nextTick(()=>{
    console.log("this is process.nextTick 1")
})
Promise.resolve().then(()=>{
    console.log("this is promise")
})
setTimeout(()=>{
    console.log("time out")
},0)

for(let i=0;i<2000000000;i++) {}