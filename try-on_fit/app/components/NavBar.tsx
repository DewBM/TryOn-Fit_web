


'use client';
import React, { useRef } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Button } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon.jsx";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Checkbox } from "@nextui-org/react";

// Define the Props interface
interface Props {
  newArrivalsRef: React.RefObject<HTMLDivElement>;
  shopNew: React.RefObject<HTMLDivElement>;
  aboutUs: React.RefObject<HTMLDivElement>;


}


export default function NavBar({ newArrivalsRef,shopNew,aboutUs }: Props) {
  const router = useRouter();

  // Scroll to New Arrivals section
  const scrollToSection = (section: string) => {
    if (section === "newArrivals" && newArrivalsRef.current) {
      newArrivalsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "shopNow" && shopNew.current) {
      shopNew.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "aboutUs" && aboutUs.current) {
      aboutUs.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFitOn = () => {
    router.push('FitOn');
  };
 
  const handleuprofile = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push("user_profile/profile");
  };

  const handleFaq = () => {
    router.push("faq");
  };

  const handlesigning = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('signin');
  };

  const handlesignout = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push('signup');
  };

  const handlecart = () => {
    router.push('Cart');
  };

  return (
    <div className="relative w-[100%] bg-black" style={{ zIndex: +1 }}>
      <div className="flex items-center h-[16vh] justify-between px-8">
        <div className="pr-[100px]">
          <Image
            src="/images/logo.png"
            alt=""
            width={150}
            height={150}
          />
        </div>

        <div className="flex items-center justify-between">
          <ul className="md:flex hidden items-center gap-10 text-white font-semibold text-[18px]">
          <li><button onClick={() => scrollToSection("newArrivals")}>New Arrivals</button></li>
            <li><button onClick={() => scrollToSection("shopNow")}>Shop Now!</button></li>
            <li><button onClick={() => scrollToSection("aboutUs")}>About Us</button></li>
          </ul>

          <div className="relative pl-10">
            <input type="search" placeholder="Search Here" className="w-full p-2 rounded-full bg-slate-50 text-black" />
            <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-black rounded-full">
              <SearchIcon size={20} strokeWidth={1.5} width={undefined} height={undefined} />
            </button>
          </div>

          <div className="hidden sm:flex pl-10">
            <Button className="bg-white text-main-dark round" onClick={handleFitOn}>Try Fit On!</Button>
          </div>

          <div className="hidden sm:flex pl-10">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10 cursor-pointer" onClick={handlecart}>
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
              <DropdownItem key="profile" className="hover:bg-main-dark">
                <a href="#" onClick={handleuprofile}>Profile</a>
              </DropdownItem>
              <DropdownItem key="notifications" className="hover:bg-main-dark">
                <a href="#">Notifications</a>
              </DropdownItem>
              <DropdownItem key="settings" className="hover:bg-main-dark">
                <a href="#">Settings</a>
              </DropdownItem>
              <DropdownItem key="help" className="hover:bg-main-dark">
                <a href="" onClick={handleFaq}>Help &amp; Support</a>
              </DropdownItem>
              <DropdownItem key="signin" className="hover:bg-main-dark">
              <a href="#" onClick={handlesigning}>Signin</a>
              </DropdownItem>
              <DropdownItem key="signup" className="hover:bg-main-dark">
              <a href="#" onClick={handlesignout}>Signup</a>
              </DropdownItem>
              <DropdownItem key="logout" className="hover:bg-main-dark text-red-600">
                <a href="#">Logout</a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
