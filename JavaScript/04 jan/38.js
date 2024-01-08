function sum(){

}
// -----------------------------------------------------------------------------------------------

const promise1 = new Promise(function(resolve,reject){
  setTimeout(()=>{
    resolve("resolve 1")
  },9000)
  })

const promise2 = new Promise(function(resolve,reject){
  setTimeout(()=>{
    resolve("resolve 2")
  },3000)
  })
  

async function p(){
  const r1 = await promise1
  console.log(r1,"response one")
  // setTimeout(()=>{
  //   console.log("setTimeout runs")
  // },0)
  const r2 = await promise2
  console.log(r2,"response two")
}



const result = p()
console.log("it runs")
// console.log(result,"result<><><<><><")