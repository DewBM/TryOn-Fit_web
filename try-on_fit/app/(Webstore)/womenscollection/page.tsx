import React from 'react';
import Image from 'next/image';
import womenscolleimg from "@/public/images/banner1.png";
import NavBar from '@/app/components/NavBar';
import Filter from '@/app/components/Filter';
import ProductA from '@/app/components/productA';

function WomenCollectionPage() {
  const items = [
    {
      images: ['/images/women/1.webp'],
      name: 'Sleeve Blouse',
      price: 2900,
    },
    {
      images: ['/images/women/2.webp'],
      name: 'Casual Blouse',
      price: 3200,
    },
    {
      images: ['/images/women/1.webp'],
      name: 'Sleeve Blouse',
      price: 2900,
    },
    {
      images: ['/images/women/2.webp'],
      name: 'Casual Blouse',
      price: 3200,
    },
    {
      images: ['/images/women/3.webp'],
      name: 'Floral Blouse',
      price: 3100,
    },
    {
      images: ['/images/women/4.webp'],
      name: 'Elegant Blouse',
      price: 3500,
    },
    {
      images: ['/images/women/5.webp'],
      name: 'Formal Blouse',
      price: 3000,
    },
    {
      images: ['/images/women/6.webp'],
      name: 'Chic Trousers',
      price: 4000,
    },
    {
      images: ['/images/women/7.webp'],
      name: 'Casual Trousers',
      price: 3800,
    },
    {
      images: ['/images/women/8.webp'],
      name: 'Denim Trousers',
      price: 3500,
    },
    
    {
      images: ['/images/women/11.webp'],
      name: 'Classic Trousers',
      price: 3900,
    },
    {
      images: ['/images/women/12.webp'],
      name: 'Summer Frock',
      price: 4200,
    },
    {
      images: ['/images/women/11.webp'],
      name: 'Evening Frock',
      price: 4500,
    },
    {
      images: ['/images/women/10.jpeg'],
      name: 'Evening Frock',
      price: 4500,
    },
    {
      images: ['/images/women/13.jpeg'],
      name: 'Sleeve Blouse',
      price: 2900,
    },
    {
      images: ['/images/women/14.jpeg'],
      name: 'Casual Blouse',
      price: 3200,
    },
    {
      images: ['/images/women/15.jpeg'],
      name: 'Floral Blouse',
      price: 3100,
    },
    {
      images: ['/images/women/16.jpeg'],
      name: 'Elegant Blouse',
      price: 3500,
    },
    {
      images: ['/images/women/11.webp'],
      name: 'Classic Trousers',
      price: 3900,
    },
    {
      images: ['/images/women/1.webp'],
      name: 'Sleeve Blouse',
      price: 2900,
    },
    {
      images: ['/images/women/11.webp'],
      name: 'Classic Trousers',
      price: 3900,
    },
    {
      images: ['/images/women/12.webp'],
      name: 'Summer Frock',
      price: 4200,
    },
    {
      images: ['/images/women/11.webp'],
      name: 'Evening Frock',
      price: 4500,
    },
    {
      images: ['/images/women/10.jpeg'],
      name: 'Evening Frock',
      price: 4500,
    },
    {
      images: ['/images/women/13.jpeg'],
      name: 'Sleeve Blouse',
      price: 2900,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <NavBar />
      <div className="w-full h-16">
        <Image
          src={womenscolleimg}
          alt="Women's Collection"
          className="w-full object-cover"
        />
      </div>
      <div className="flex flex-row pt-[55rem]">
        <div className="w-[20%] pt-10 justify-start">
          <Filter />
        </div>
        <div className="flex w-[80%]  flex-wrap gap-[6rem]  pb-[1rem] justify-center -z-1">
          {items.map((item, index) => (
            <ProductA
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

export default WomenCollectionPage;
