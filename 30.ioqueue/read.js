/*const fs=require("fs")
fs.readFile(__filename,()=>{
    console.log("this is read file 1");
})
process.nextTick(()=>{
    console.log("next tick 1")
})
Promise.resolve().then(()=>{
    console.log("promise 1")
})*/

/*
const fs=require("fs");
setTimeout(()=>{
    console.log("set time out 1");
},0)
fs.readFile(__filename,()=>{
    console.log("this is read file")
})*/

const fs=require("fs")

fs.readFile(__filename,()=>{
    console.log("this is readFile")
})

process.nextTick(()=>{
    console.log("next tick 1")
})
Promise.resolve().then(()=>{
    console.log("pomise")
})
setTimeout(()=>{
    console.log("this is setTimeout 1")
},0)

for(let i=0;i<2000000000;i++){}