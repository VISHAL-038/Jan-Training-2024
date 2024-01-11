// get multiple elements
//METHOD 1) get multiple elements using get element by class name
// return HTML collection

//METHOD 2) get element using get element by querry selector
//return NodeList

const navItem = document.getElementsByClassName("nav-item");
console.log(navItem);
console.dir(navItem);
console.log(Array.isArray(navItem));

//iterating HTML collection
// for(let i =0;i<navItem.length;i++){
//     console.log(navItem[i].textContent);
// }


//method 2)
const navItem2 = document.querySelectorAll(".nav-item");
console.log(navItem2);
console.dir(navItem2);
console.log(Array.isArray(navItem2));


// for (let index = 0; index < navItem2.length; index++) {
//      console.log(navItem2[index].textContent);
//      navItem2[index].style.color="red";
//      navItem2[index].style.backgroundColor="lightblue";
// }

// console.log("..................");
// for(let i of navItem2){
//     console.log(i.textContent);
//     i.style.color="blue";
// }

//odd number color change
for(let i =0;i<navItem.length;i=i+2){
    navItem[i].style.color= "red";
    // navItem[i].style.fontWeight = "400";
}