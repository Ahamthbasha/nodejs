const EventEmitter=require("node:events");
const emitter=new EventEmitter()
emitter.on("order-pizza",(size,topping)=>{
    console.log(`order received! Baking a ${size} pizza with ${topping}`)
});
emitter.on("order-pizza",(size)=>{
    if(size==='large'){
        console.log("serving complementary drinks")
    }
})
console.log("wait a minute")
emitter.emit("order-pizza","large","mushroom")