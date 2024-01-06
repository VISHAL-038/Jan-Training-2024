// by bracket we can access that element that i don't know . 
// brcket will check full property
// dot will only check value

const obj ={
    name:"ankit",
    age:"20",
    gender:"male"
};
// for (let key  in obj){
//     console.log(key,":",obj[key]);
// }
const resultingKeys= Object.keys(obj);
console.log(resultingKeys);
const resultingValues= Object.values(obj);
console.log(resultingValues);
const resultingEntris= Object.entries(obj);
console.log(resultingEntris);

const arr = Object.keys(obj);
arr.map((key)=>obj[key]);
console.log(arr);

//clone 
const newObj = {...obj};
console.log(newObj);
newObj.name="nar";
console.log(newObj);
console.log(obj);

const car = {
    car:{vw:"polo"},
    model:2021
}

//deep copy (when original array doesn't chnage while chaging in new obj) and shallow copy(when main object changes at the time of changing in new obj)(in nested object shalow copy is done)

const copy = {...car};
console.log(copy);

copy.car.vw="zeta";
console.log(car);
 
//deep copy in nested obj
//1st sringfy
// 2nd parse
const deepCopyingObj = JSON.parse(JSON.stringify(car));
console.log(deepCopyingObj);
deepCopyingObj.car.vw="virtus";
