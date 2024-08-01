import React from "react";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import Statusslider from "@/app/components/statusslider";
import Statuscard from "@/app/components/statuscard";
import Ordersummary from "@/app/components/ordersummary";
import Needhelp from "@/app/components/needhelp";
import OrderNumber from "@/app/components/OrderNumber";
import Payment from "@/app/components/payment";
import Delivaryaddress from "@/app/components/delivaryaddress";
function page() {
  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-row pl-[5rem] py-[5rem] justify-between">
      <div className="flex flex-col w-[80%] space-y-10 ">
       
       
      <OrderNumber
          orderId={[654216389056]}
          orderDate={["July 30,2024"]}
          estimateDate={["Auguest 16,2024"]}
        />
         <Statusslider />
         <div className="space-y-3">
         <Statuscard
            images={["/images/1.webp"]}
            title={["Sleeeve Blouse"]}
            color={["Brown"]}
            price={["RS2900"]}
            quality={["1"]}
          />
           <Statuscard
            images={["/images/2.webp"]}
            title={["Sleeeve Blouse"]}
            color={["Brown"]}
            price={["Rs.3400"]}
            quality={["2"]}
          />
          <Statuscard
            images={["/images/3.webp"]}
            title={["Sleeeve Blouse"]}
            color={["Brown"]}
            price={["RS.6700"]}
            quality={["1"]}
          />
         </div>
       
      </div>
      <div className="flex flex-col w-[30%] space-y-5">
      <Ordersummary
          order={[13000.0]}
          delivary={[400.0]}
          discount={[200.0]}
          total={[13200.0]}
        />
        
         <Needhelp />
         <Payment 
         type={["Master"]}
         acnumber={[123456789099]}
         />
         <Delivaryaddress
         fline={["No:77/A,Old kesbewa Rd"]}
         sline={["Nugegoda"]}
         city={["Colombo"]}
         phone={[94765739623]}/>
     </div>
     
     
      </div>
      <Footer />
    </div>
  );
}

export default page;
