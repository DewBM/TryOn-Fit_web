"use client";

import Link from "next/link";
import DropdownMessage from "./DropdownMessage";
import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";
import Image from "next/image";

const Header = (props: {
  sideBarOpen: boolean;
  setSideBarOpen: (arg0: boolean) => void;
}) => {
  return (
      
    <header className=" relative z-50  top-0 z-999 flex w-full bg-white  border-l-0 border border-stroke stroke-main-dark drop-shadow-sm dark:bg-main-dark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button onClick={() => props.setSideBarOpen(!props.sideBarOpen)}>
            <svg
              className="w-6 h-6 text-main-dark dark:text-main-lighter"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        <div className="hidden sm:block">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
              

              
            </div>
          </form>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <DropdownNotification /> */}
            
            
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
