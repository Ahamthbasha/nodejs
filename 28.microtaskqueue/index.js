/*console.log("1");
process.nextTick(()=>{
    console.log("next tick 1")
})
console.log("2");*/

/*
Promise.resolve().then(()=>{
    console.log("promise")
})
process.nextTick(()=>{
    console.log("next tick")
})*/

process.nextTick(()=>{
    console.log("n 1")
})
process.nextTick(()=>{
    console.log("n 2")
    process.nextTick(()=>{
        console.log("inner n2");
    })
})
process.nextTick(()=>{
    console.log("n 3")
})

Promise.resolve().then(()=>{
    console.log("promise 1")
})
Promise.resolve().then(()=>{
    console.log("promise 2")
    Promise.resolve().then(()=>{
        console.log("inner promise2")
    })
})
Promise.resolve().then(()=>{
    console.log("promise 3")
})