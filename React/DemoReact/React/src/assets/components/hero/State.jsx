//state : object
//it is imutable in nature
//although we cannot change state directly but we can change it
//with the help of setState() method

import React,{Component} from "react";

export default class State extends Component{
    // constructor(){
    //     super();
    //     this.state={
    //         name: "vishal"
    //     }
    // }
    render(){
        this.state={
            name: "vishal"
        }
        return(
            <div>
                <h1>my name is {this.state.name}</h1>
            </div>
        )
    }
}