import React ,{Component} from "react";

export default class LifeCycle extends Component{
    constructor(){
        super(); //acess the property of parent class
        this.state = {
            count:0
        }
    }
    componentDidMount(){
        console.log("component mount function is running");
    }

    increment(){
        this.setState({count : this.state.count+1});
    }
    render(){

        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment.bind(this)}>Click to count</button>
            </div>
        )
    }
}