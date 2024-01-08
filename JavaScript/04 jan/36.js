// const a = b => b+5;
// all operations using asynchronous send to call back only promise is send to micro task
let a = 5;
console.log(a, "a");
function x(y) {
  console.log(x, "x is called"); //x value is full function
  setTimeout(() => {
    console.log("timout called");
  }, 0);
  y();
}
function y() {
  console.log(y, "y is called");
}
x(y);

// document.getElementById("btn").addEventListener("click",fucntion a(){
//     console.log("button clicked",++count);
//     })

//workshout?
//worpshout?
function countButtonClicked() {
  let count = 0;
  //closure property -> block the parent variable in the function
  //it will not send to call back queue it will stay in web api
  document.getElementById("btn").addEventListener("click", () => {
    console.log("button clicked", ++count);
  });
}
countButtonClicked();
