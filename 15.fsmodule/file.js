const fs=require("node:fs");

console.log("first")
const fileContents=fs.readFileSync("./15.fsmodule/content.txt","utf-8")
console.log(fileContents)

console.log("second")
fs.readFile("./15.fsmodule/content.txt","utf-8",(err,data)=>{
if(err){
console.log(err)
}
else{
    console.log(data)
}
})

console.log("third")

console.log("--------------write a file-----------------")

//synchronous
fs.writeFileSync("./greet.txt","hello world")

fs.writeFile("./greet.txt","hello vishwas",{flag:"a"},(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file written")
    }
})