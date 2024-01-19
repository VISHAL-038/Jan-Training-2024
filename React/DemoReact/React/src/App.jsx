// import Navbar from "./assets/components/navbar/Navbar";
// import Goal, { MadeGoal , DidNotGoal } from "./assets/components/goal/goal";
// import DynamicComp from "./assets/components/navbar/DynamicComp";
// import Props from "./assets/components/hero/Props";

// function App(){
//   const obj1={
//     name:"vishal",
//     age:23
//   }
//   return(
//     // <h1>this is new App.jsx</h1>
//     /* <Props name='anmol'/>  accessing varibale*/
//     <div className="App">
//       <Navbar/>
//       <Goal/>
//       <MadeGoal/>
//       <DidNotGoal/>
//       <DynamicComp/>
//       <Props data={obj1} />
//     </div>
//   )
// }


// App.jsx
// import React, { Component } from "react";
// import Props2 from "./assets/components/hero/Props2";

// class App extends Component {
//   render() {
//     const person = {
//       name: "John Doe",
//       age: 25,
//     };

//     return (
//       <div>
//         <Props2 person={person} />
        
//       </div>
//     );
//   }
// }
// export default App;

// import State from "./assets/components/hero/state";

// function App(){
//   return(
//     <State/>
//   )
// }
// export default App;

import Event from "./assets/components/hero/Event";
import Check from "./assets/components/hero/Check";
import LifeCycle from "./assets/components/hero/LifeCycle";
import FunctionComponent from "./assets/components/hero/FunctionComponent";
import Navbar from "./assets/components/navbar/Navbar"
import Counter from "./assets/components/hero/Counter"
import Contact from "./assets/components/hero/Contact";
import Initializing from "./assets/components/hero/Initializing";
import SetSimpleExample from "./assets/components/hero/SetSimpleExample";
import ReadStateExample from "./assets/components/hero/ReadStateExample";
import ReadOnlyStateExample from "./assets/components/hero/ReadOnlyStateExample";
import UpdateObjectStateExample from "./assets/components/hero/UpdateObjectStateExample";
import ExampleStateArray from "./assets/components/hero/ExampleStateArray";
import MyForm from "./assets/components/hero/MyForm";
import Timer01 from "./assets/components/hero/Timer01";
import PixelBay from "./assets/components/sir/PixelBay"

function App(){
  return(
    // <Check/>
    // <LifeCycle/>
    //<FunctionComponent/> 
    // <Counter/>
    // <Navbar/>
      
    //   <Contact/>
    //   <Initializing/>
    // <SetSimpleExample/>
    // <ReadStateExample/>
    // <ReadOnlyStateExample/>
    //<UpdateObjectStateExample/>
    // <ExampleStateArray/>
    //   <MyForm/>
    //   <Timer01/>
    <div>
      <PixelBay/>
    </div>
    
  )
}
export default App;