// function Solve(val) {
//     var v = document.getElementById('res');
//     v.value += val;
//  }
//  function Result() {
//     var num1 = document.getElementById('res').value;
//     var num2 = eval(num1);
//     document.getElementById('res').value = num2;
//  }
//  function Clear() {
//     var inp = document.getElementById('res');
//     inp.value = '';
//  }
//  function Back() {
//     var ev = document.getElementById('res');
//     ev.value = ev.value.slice(0,-1);
//  }

//eval = result is fix


function Solve(val){
   document.getElementById('res').value +=val;
}
function Result(){
   var p = document.getElementById('res').value;
   var q=eval(p);
   document.getElementById('res').value=q;
}
function Clear(){
   document.getElementById('res').value="";
 }

function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0,-1);
}
