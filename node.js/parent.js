const {fork}=require("child_process")

const child=fork("./child.js")

child.send({greeeting:"hello from parent"})

child.on("message",(message)=>{
    console.log("parent received message",message)
})
