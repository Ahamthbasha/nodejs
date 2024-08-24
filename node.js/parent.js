const {fork} = require("child_process")
const child=fork("./child.js")
child.send({command:"start"})
child.on("message",(message)=>{
    console.log("message from child",message)
})
