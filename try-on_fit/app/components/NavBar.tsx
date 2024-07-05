'use client'
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Button} from "@nextui-org/react";
import {SearchIcon} from "./SearchIcon.jsx";

import Image from "next/image"
// Define the Props interface
interface Props {
  openNav: () => void; 

}


export default function NavBar() {
  return (
    <div className={`fixed w-[100%] bg-black `}>
      <div className="flex items-center  h-[16vh] justify-between  px-8 ">
        <div className="pr-[100px]">  <Image
    src="/images/logo.png"
    alt=""
    width={150}
    height={150}
   
  /> 
 
  </div>
    
       <div className="flex items-center justify-between ">
        <ul className='md:flex hidden items-center space-x-10 text-white font-semibold text-[18px] '>
          <li ><a className='nav_link ' href="#Homes">New Arrivals</a></li>
          <li><a className='nav_link' href="#AboutMe">Shop Now!</a></li>
          <li><a className='nav_link' href="#Services">About Us</a></li>
     
          
        </ul>
        <div className="relative pl-10">
        <input type='search' placeholder='Search Here' className='
        w-full p-2 rounded-full bg-slate-50 text-black' />
        <button className='absolute right-1 top-1/2 -translate-y-1/2  p-2 bg-black rounded-full '>
         
        <SearchIcon size={20} strokeWidth={1.5} width={undefined} height={undefined} />
        </button>
    </div>
    <div className="hidden sm:flex pl-10">
        <Button className="bg-white text-main-dark round">Try Fit On!</Button></div>

<div className="hidden sm:flex pl-10 ">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
<path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>

</div>



<Dropdown className="bg-main-lighter">
   <DropdownTrigger>
    
      <div className="hidden sm:flex pl-10"> 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
</div> 
    
   </DropdownTrigger>
   <DropdownMenu aria-label="Static Actions">
   <DropdownItem key="new" className="hover:bg-main-dark">  <a href="#">Profile</a></DropdownItem>
     <DropdownItem key="edit" className="hover:bg-main-dark">  <a href="##">Edit</a></DropdownItem>
     <DropdownItem key="notifi" className="hover:bg-main-dark"><a href="#">Notifications</a></DropdownItem>
     <DropdownItem key="settings" className="hover:bg-main-dark"><a href="#">Settings</a></DropdownItem>
     <DropdownItem key="help" className="hover:bg-main-dark">  <a href="#">Help &amp; Support</a></DropdownItem>
    
  
   </DropdownMenu>
 </Dropdown>
       </div>
      </div>
    </div>
  );
};


