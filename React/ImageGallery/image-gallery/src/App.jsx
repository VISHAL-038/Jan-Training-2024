// // App.js
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./assets/components/imageViewer/Navbar";
// import Home from "./assets/components/imageViewer/Home";
// import ImageViewer from "./assets/components/imageViewer/ImageViewer";
// import Contact from "./assets/components/imageViewer/Contact";

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Navbar />
//         <Routes>
//           <Route path="/Home" exact component={Home} />
//           <Route path="/ImageViewer" component={ImageViewer} />
//           <Route path="/Contact" component={Contact} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;


import React from "react";
import ImageViewer from "./assets/components/imageViewer/ImageViewer";
const App =()=>{
  return(
    <div>
      <ImageViewer/>
      </div>
  )
}
export default App;