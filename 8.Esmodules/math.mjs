/*first way
const add=((a,b)=>{
    return a+b;
})

export default add;*/

//second way
/*
export default ((a,b)=>{
    return a+b;
})
*/

/*
third way
const add=((a,b)=>{
    return a+b;
})
const sub=((a,b)=>{
    return a-b;
})
export default{
    add,
    sub
}*/

/*fourth way
const add=((a,b)=>{
    return a+b;
})
const sub=((a,b)=>{
    return a-b;
})
export default{
    add,
    sub
}*/

/*fifth way
export const add=((a,b)=>{
    return a+b;
}) 
export const sub=((a,b)=>{
    return a-b;
})*/

//sixth Way 
export const add=((a,b)=>{
    return a+b;
})
export const sub=((a,b)=>{
    return a-b;
})