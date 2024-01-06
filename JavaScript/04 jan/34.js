//set time out
//only time
const result = setTimeout((a)=>{
    console.log("this function is called repeatedly after 1 sec");
    console.log(a);
},[1000],"hello")

console.log(" hello");

//set interval out
//it will again again call in time interval
const clearIntervalid =  setInterval(() => {
    console.log("this function is called repeatedly after 1 sec",new Date());
}, [1000]);

clearInterval(clearIntervalid)

