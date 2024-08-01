import React from 'react'
import Image from 'next/image'
import kidscolleimg from "@/public/images/banner3.png"
import NavBar from '@/app/components/NavBar'
import Filter from '@/app/components/Filter'
import Product from '@/app/components/Product'

function Page() { // Capitalize component name
  const items = [
    // Baby Boy T-Shirts
    {
      images: ['/images/kids/1.jpg'],
      name: 'Baby Boy T-Shirt 1',
      price: 1200,
    },
    {
      images: ['/images/kids/2.jpeg'],
      name: 'Baby Boy T-Shirt 2',
      price: 1300,
    },
    {
      images: ['/images/kids/5.jpeg'],
      name: 'Baby Boy T-Shirt 3',
      price: 1250,
    },
    // Baby Girl T-Shirts
    {
      images: ['/images/kids/3.jpeg'],
      name: 'Baby Girl T-Shirt 1',
      price: 1400,
    },
    {
      images: ['/images/kids/6.jpeg'],
      name: 'Baby Girl T-Shirt 2',
      price: 1450,
    },
    {
      images: ['/images/kids/7.jpeg'],
      name: 'Baby Girl T-Shirt 3',
      price: 1500,
    },
    {
      images: ['/images/kids/8.jpeg'],
      name: 'Baby Girl T-Shirt 4',
      price: 1550,
    },
    // Frock
    {
      images: ['/images/kids/4.jpeg'],
      name: 'Kids Frock',
      price: 1600,
    },
    // Boy Summer Suits
    {
      images: ['/images/kids/9.jpeg'],
      name: 'Boy Summer Suit 1',
      price: 1700,
    },
    {
      images: ['/images/kids/10.jpeg'],
      name: 'Boy Summer Suit 2',
      price: 1800,
    },
    {
      images: ['/images/kids/11.jpeg'],
      name: 'Boy Summer Suit 3',
      price: 1850,
    },
    {
      images: ['/images/kids/12.jpeg'],
      name: 'Boy Summer Suit 4',
      price: 1900,
    },
    {
      images: ['/images/kids/15.jpeg'],
      name: 'Boy Summer Suit 5',
      price: 1950,
    },
    // Girl Suit
    {
      images: ['/images/kids/13.jpeg'],
      name: 'Girl Suit',
      price: 2000,
    },
    // Baby Cotton Suit
    {
      images: ['/images/kids/14.jpeg'],
      name: 'Baby Cotton Suit',
      price: 1600,
    },
    {
      images: ['/images/kids/4.jpeg'],
      name: 'Kids Frock',
      price: 1600,
    },
  ];
  
  return (
    <div className="flex flex-col w-full">
    <NavBar />
    <div className="w-full h-16">
      <Image
        src={kidscolleimg}
        alt="Women's Collection"
        className="w-full object-cover"
      />
    </div>
    <div className="flex flex-row pt-[60rem]">
      <div className="w-[20%] pt-10 justify-start">
        <Filter />
      </div>
      <div className="flex w-[80%] px-10 flex-wrap gap-[6rem]  pb-[1rem] justify-center -z-1">
        {items.map((item, index) => (
          <Product
            key={index}
            images={item.images}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
    <div className="flex justify-center">
      <ul className="pagination flex flex-row gap-3 rounded-3xl bg-main-lighter py-5 px-10">
        <li className="rounded-full"><a href="#" aria-label="Previous">&laquo;</a></li>
        <li className="rounded-full"><a href="#" className="active">1</a></li>
        <li className="rounded-full"><a href="#">2</a></li>
        <li className="rounded-full"><a href="#">Next &raquo;</a></li>
      </ul>
    </div>
  </div>
  );
}

export default Page; // Export the component with a capitalized name
