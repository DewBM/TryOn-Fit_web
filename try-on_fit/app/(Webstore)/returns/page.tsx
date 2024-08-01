import React from "react";
import Return from "@/app/components/return";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import OrderNumber2 from "@/app/components/ordernumber2";
import Needhelp from "@/app/components/needhelp";
import Payment from "@/app/components/payment";
import Delivaryaddress from "@/app/components/delivaryaddress";
function returns() {
  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-row pl-[5rem]  justify-between pb-10">
        <div className="flex flex-col w-[80%] space-y-10 ">
          <OrderNumber2
            orderId={[654216389056]}
            deliveredDate={["July 30,2024"]}
          />

          <div className="space-y-3">
            <Return  images={["/images/1.webp"]}
            title={["Sleeeve Blouse"]}
            color={["Brown"]}
            price={["RS2900"]}
            quality={["1"]}/>
            <Return  images={["/images/2.webp"]}
            title={["Sleeeve Blouse"]}
            color={["Brown"]}
            price={["Rs.3400"]}
            quality={["2"]} />
            <div className=""></div>
            <div className="flex flex-row w-[200px] gap-10  pl-[45rem]">
              <button
                type="submit"
                className="mt-4 border border-main-dark  text-main-dark px-4 py-2 rounded-md hover:bg-main-dark  hover:text-white focus:outline-none focus:ring-2 "
              >
                Cancel
              </button>
              <button
                type="submit"
                className="mt-4 border bg-main-dark  text-white px-4 py-2 rounded-md hover:bg-main-dark  hover:main-dark focus:outline-none focus:ring-2 "
              >
                Return
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[30%] space-y-5">
          <Needhelp />
          <Payment type={["Master"]} acnumber={[123456789099]} />
          <Delivaryaddress
            fline={["No:77/A,Old kesbewa Rd"]}
            sline={["Nugegoda"]}
            city={["Colombo"]}
            phone={[94765739623]}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default returns;
