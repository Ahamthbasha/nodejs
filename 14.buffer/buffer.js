const buffer=new Buffer.from("vishwas")
console.log(buffer.toJSON())
console.log(buffer.toString())
buffer.write("code")
console.log(buffer.toString())