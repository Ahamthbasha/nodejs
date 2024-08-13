const obj1={
    name:"bruce wayne"
}
/*
if we change here it change original value
const obj2=obj1;
obj2.name="christopher nolan";
console.log(obj1.name)*/

//it does not affect the other code
let obj2=obj1
obj2={
    name:"ben 10"
}
console.log(obj2.name);
console.log(obj1.name);