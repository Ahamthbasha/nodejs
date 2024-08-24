process.on("message",(message)=>{
    console.log("child recieved",message)
    process.send({response:"child saying hello"})
})