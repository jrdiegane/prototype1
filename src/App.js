
import Navbar from "./navbar/Navbar";
import About from "./about/About";
import Works from "./works/Works";
import MyServices from "./myservices/MyServices";
import MyTeam from "./myteam/MyTeam";
import Choice from "./choice/Choice";
import Snake from "./snake/Snake";
import Pricing from "./pricing/Pricing";
import How from "./how/How";
import MyPackages from "./mypackage/MyPackages";
import Facts from "./facts/Facts";
import Slide from "./slide/Slide";
import Get from "./get/Get";
import Latest from "./latest/Latest";
import Late from "./late/Late";
import For from "./for/For";
import Footer from "./footer/Footer";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      
      <Navbar />
      
    
      <About/>


      <Works/>
      <MyServices/>
      <MyTeam/>
      <Choice />
      <Snake />
      <Pricing />
      <How />
      <MyPackages />
      <Facts />
      <Slide />
      <Get />
      <Latest />
      <Late />
      <For />
      <Footer /> 
    </div>
    
  );
}


export default App;
