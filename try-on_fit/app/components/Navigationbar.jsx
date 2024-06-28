import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import {Logo} from "./Logo.jsx";
import {SearchIcon} from "./SearchIcon.jsx";
import SearchBar from "./SearchBar.jsx"

export default function Navigationbar() {
  return (
    <Navbar isBordered className="bg-black text-white h-[8rem]">
      <NavbarContent justify="start" className="w-[50%] mr-[6rem]">
        <NavbarBrand className="ml-10 mr-10 ">
          <Logo />
         </NavbarBrand>

        <NavbarContent className="hidden sm:flex font-semibold gap-14">
          <NavbarItem> <Link color="foreground" href="#"> New Arrivals</Link> </NavbarItem>
          <NavbarItem isActive><Link href="#" aria-current="page" color="secondary">Shop Now!  </Link></NavbarItem>
          <NavbarItem> <Link color="foreground" href="#"> About Us</Link> </NavbarItem>
        </NavbarContent>

      </NavbarContent>

        <NavbarContent as="div" className="items-center w-[50%]" justify="center"> <form className='w-[300px] relative  '>
    <div className="relative">
        <input type='search' placeholder='Search Here' className='
        w-full p-4 rounded-full bg-slate-50' />
        <button className='absolute right-1 top-1/2 -translate-y-1/2
        p-4 bg-black rounded-full'>
            <SearchIcon />
        </button>
    </div>
   </form></NavbarContent>





         {/* <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown> 
      */}
    </Navbar>
  );
}
