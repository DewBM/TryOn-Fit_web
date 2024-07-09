'use client'
import Image from "next/image";
import Footer from "./components/Footer"

import NavBar from "./components/NavBar";
import Card from "./components/Product"
import { useState } from "react";

export default function Home() {
 
  return (
<>
    <div>
      <NavBar />
      <div className="  h-[100vh]">
      <div className=" flex flex-row flex-wrap pr-[20px]  pt-[25vh] gap-3 pl-[40px]">
 
    <div ><Card /></div>
     <div><Card /></div> 
    <div ><Card /></div>
    <div><Card /></div>  
</div>

      </div>
      <Footer />
    </div>
    </>
  );
}
