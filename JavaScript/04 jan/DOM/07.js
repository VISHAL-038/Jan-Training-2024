//iner html

const innerContent = document.querySelector(".head");
innerContent.innerHTML = "<h1>Rayat Bahara</h1>"
innerContent.innerHTML += "<p>a university</p>"
innerContent.innerHTML += "<button class='btn'>a university</button>"

//parent node
const heading1 = document.querySelector("h1");
const x = heading1.parentNode;
// console.log(x);
x.style.backgroundColor = "red";

//inerHTML 