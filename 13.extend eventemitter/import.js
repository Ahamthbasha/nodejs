/*const pizza=require("./pizzaclass")
const pizza1=new pizza();
pizza1.order();
pizza1.display();*/

 const pizzaclass=require("./pizzaclass");
 const serveclass=require("./serveclass")
 const pizza1=new pizzaclass()
 const serve=new serveclass()
 pizza1.on("order",(size,topping)=>{
    console.log(`order received! baking a ${size} pizza with ${topping}`)
    serve.serverDrink(size)
 })
 pizza1.order("large","mushrooms");
 pizza1.display()