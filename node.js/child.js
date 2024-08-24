process.on("message",(message)=>{
    console.log("message from parent",message)
    process.send({response:"child saying hello"})
})