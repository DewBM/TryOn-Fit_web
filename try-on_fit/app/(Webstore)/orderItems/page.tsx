"use client";
import React, { useState } from 'react';
import NavBar from '@/app/components/NavBar';
import Orderprograss from '@/app/components/orderprograss';
import Footer from '@/app/components/Footer';
import Orderitemcard from "@/app/components/orderitemcard";
import Needhelp from '@/app/components/needhelp';
import Delivaryaddress from '@/app/components/delivaryaddress';
import Payment from '@/app/components/payment';


const orderitems = () => {
  const [selectedStatus, setSelectedStatus] = useState('All');

  // Sample data
  const items = [
    { 
      images: ["/images/1.webp"], 
      title: ["Sleeve Blouse"], 
      color: ["Brown"], 
      price: ["RS2900"], 
      quality: ["1"], 
      status: ["Delivered"],
      orderId:["PD2345678954627"],
      orderplacedate:["12 july,2024"] 
    },
    { 
      images: ["/images/5.webp"], 
      title: ["Sleeve Blouse"], 
      color: ["Gray"], 
      price: ["RS2900"], 
      quality: ["1"], 
      status: ["Processing"] ,
      orderId:["PD2345678954627"],
      orderplacedate:["12 july,2024"] 
    },
    { 
      images: ["/images/4.webp"], 
      title: ["Sleeve Blouse"], 
      color: ["Black"], 
      price: ["RS2900"], 
      quality: ["1"], 
      status: ["Delivered"] ,
      orderId:["PD2345678954627"],
      orderplacedate:["12 july,2024"] 
    }
  ];

  // Filter items based on selected status
  const filteredItems = items.filter(item => 
    selectedStatus === 'All' || item.status[0] === selectedStatus
  );

  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-row pl-[5rem] py-[1rem] justify-between ">
        <div className="flex flex-col w-[80%] space-y-10">
          
          <Orderprograss setSelectedStatus={setSelectedStatus} />
          {filteredItems.map((item, index) => (
            <Orderitemcard
              key={index}
              images={item.images}
              title={item.title}
              color={item.color}
              price={item.price}
              quality={item.quality}
              status={item.status}
              orderId={item.orderId}
              orderplacedate={item.orderplacedate}
            />
          ))}
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

export default orderitems;
