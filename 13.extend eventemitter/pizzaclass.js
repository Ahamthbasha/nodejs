/*class pizzaclass {
    constructor(){
        super()
        this.orderCount=0;
    }
    order(){
        this.orderCount++;
    }
    display(){
        console.log("the no of orders we have",this.orderCount)
    }
}
module.exports=pizzaclass;*/



const EventEmitter=require("node:events")

class pizzaclass extends EventEmitter{
    constructor(){
        super();
        this.orderCount=0;
    }
    order(size,topping){
        this.orderCount++;
        this.emit("order",size,topping)
    }
    display(){
        console.log("order is",this.orderCount)
    }
}
module.exports=pizzaclass;