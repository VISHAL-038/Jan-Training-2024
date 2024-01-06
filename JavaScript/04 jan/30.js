// const arr=[1,2,3];
// arr.map((item,index)=>console.log(item,index))
// const newArr=arr.map((item,index)=>item)
// const newArr=arr.filter((item)=>item>2)

// push will return length
//pop will return poped element

//slice and splice

// const sliceMethod = arr.slice(2,3); console.log(arr,sliceMethod)
// const spliceMethod = arr.splice(2,2,99,5); console.log(arr,spliceMethod)

// const foundElement = arr.find((item)=>item>5)
// const foundIndex = arr.findIndex((item)=>item>5)

// const joinedString = arr.join(",")

//Q. string = "Hello World" output="olleh dlrow"

var og = "Hello World";
var rev = og.split('').reverse().join('');
var rev2= rev.split(' ').reverse().join(' ');
console.log(rev2);