//import NavBar from "./components/NavBar";
import EmpNavBar from "./components/EmpNavBar";
import { useState } from "react";
import Header from "./components/Header/index";
import Sidebar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Product from "./components/Product"
import Slider from "./components/Slider";

export default function Home() {
  return (

    <div>
      <NavBar />
      <Sidebar />
      <div className="pt-[100vw] w-[600px] h-[700px]">
        <Slider />
      </div>
      {/* <div className="  h-[100vh]">
      <div className=" flex flex-row flex-wrap pr-[20px]  pt-[25vh] gap-3 pl-[40px]">
     <div><Product/></div>
     <div><Product/></div>
     <div><Product/></div>
     <div><Product/></div>
     <div><Product/></div>
     
    </div>
    </div> */}
    </div>

  );
}
