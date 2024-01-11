//get and set attributes

const link1 = document.querySelector("a");
console.log(link1.getAttribute("href"));

const input1= document.querySelector("input");
console.log(input1.getAttribute("type"));



//setAttribute
link1.setAttribute("href","https://www.google.com/")
console.log(link1.getAttribute("href"));

input1.setAttribute("type","password");
console.log(input1.getAttribute("type"));