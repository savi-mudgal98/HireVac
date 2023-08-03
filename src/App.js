import React from "react";
import Navbars from "./components/Navbars";
import Main from "./components/Main";
import Jobs from "./components/Jobs";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import Steps from "./components/Steps";

function App() {
  return (
    <div className="App">
          <Navbars/>
           <Main/>
           <Steps/>
           <Jobs/>
           <Testimonial/>
           <Footer/>
    </div>
  );
}

export default App;
