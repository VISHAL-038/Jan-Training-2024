// props :- stands for properties.
// these are like arguments un function 
// props sent via HTML element attributes.
//create a varibale and send it to another.
//create a object and send it to another
//meanwhile use their propoerties(props).

import React from "react";

// function Props({name}){
//     return(
//         <>
//         <h1>my name is {name}</h1>
//         </>   
//     )
// }

function Props({data}){
    return(
        <h1>my name is {data.name} and age is {data.age}</h1>
    )
}
export default Props;