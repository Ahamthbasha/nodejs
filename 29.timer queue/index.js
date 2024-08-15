setTimeout(()=>{
    console.log("timeout 1")
},0)
setTimeout(()=>{
    console.log("timeout 2")
},0)
setTimeout(()=>{
    process.nextTick(()=>{
        console.log("next tick inside set timeout 3")
    })
},0)
setTimeout(()=>{
    console.log("timeout 4")
},0)

process.nextTick(()=>{
    console.log("1")
})
process.nextTick(()=>{
    console.log("2")
    process.nextTick(()=>{
        console.log("inner 2")
    })
})
process.nextTick(()=>{
    console.log("3")
})
Promise.resolve().then(()=>{
    console.log("promise 1")
})
Promise.resolve().then(()=>{
    console.log("promise 2")
    Promise.resolve().then(()=>{
        console.log("inner promise 2")
    })
})
Promise.resolve().then(()=>{
    console.log("promise 3")
})