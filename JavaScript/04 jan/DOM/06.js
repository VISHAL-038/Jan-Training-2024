// HTML collection and NodeList
//array like object ---> beacuse they hav indexing and length type property

// simple for loop working
//for of loop
const navItem2 = document.querySelectorAll(".nav-item");
console.log("..................");
for (let i of navItem2) {
  console.log(i.textContent);
  i.style.color = "red";
}