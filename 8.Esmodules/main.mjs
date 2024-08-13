/*first way
import add from "./math.mjs"
console.log(add(1,2))*/


//second way
/*
import add from "./math.mjs"
console.log(add(1,3))*/

/*
third way
import math from "./math.mjs";
console.log(math.add(5,5))
console.log(math.sub(5,5))*/


/* fourth way
destructuring
import math from "./math.mjs"
const {add,sub}=math
console.log(add(1,3))
console.log(sub(3,1))*/

/* fifth way
import * as math from "./math.mjs"
const {add,sub}=math
console.log(add(1,2))
console.log(sub(2,1))
*/

//sixth way
import {add,sub} from "./math.mjs"
console.log(add(3,1))
console.log(sub(3,1))