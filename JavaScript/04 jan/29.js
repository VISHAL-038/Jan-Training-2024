const key ="email";
const obj ={
    name:"raman",
    //email :"test123@gmail.com"
    age:"36",
    weigth:"70kg"
}
obj.school = "kv";
obj[key]="test123@gmail.com"
console.log(obj);

//how to iterate object

for (let key  in obj){
    console.log(key,":",obj[key]);
}