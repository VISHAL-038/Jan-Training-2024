console.log("begins")
setTimeout(()=>{
  console.log("begins 2")
  Promise.resolve().then(()=>{
    console.log("promise 1")
  })
},0)

new Promise(function(resolve,reject){
  console.log("promise 2")
  setTimeout(()=>{
    console.log("setTimeout 2")
    resolve("resolve 1")
  },0)
}).then(()=>{
  console.log("dot then 1")
  setTimeout(()=>{
    console.log("setTimeout 3")
  },0)
})