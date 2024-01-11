//basic opration on DOM

console.log(window.document);
console.dir(window.document);  //-> document will understand this raw thing

//select element using get element by ID
console.log(document.getElementById("hello"));
console.dir(document.getElementById("hello"));

const h1 = document.getElementById("hello");
console.log(h1);
h1.style.color="red";
h1.style.backgroundColor="green";

//select element using query selector
//it returns node list of elements that match the selectors
//if no matches found then it return empty collection []
//we can access individual element from the collection using index number
const hh1 = document.querySelector(".nav-item");
hh1.style.color = "red";  //-> it will only work on first element . next element are capture by loop
