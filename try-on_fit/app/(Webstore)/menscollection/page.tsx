import React from 'react';
import Image from 'next/image';
import menscolleimg from '@/public/images/banner2.png';
import NavBar from '@/app/components/NavBar';
import Filter from '@/app/components/Filter';
import Product from '@/app/components/Product';

function MenCollectionPage() {
  const items = [
    { images: ['/images/men/1.webp'], name: 'Basic T-Shirt', price: 1500 },
    { images: ['/images/men/2.webp'], name: 'Graphic T-Shirt', price: 1800 },
    { images: ['/images/men/3.webp'], name: 'Striped T-Shirt', price: 1600 },
    { images: ['/images/men/4.webp'], name: 'V-Neck T-Shirt', price: 1700 },
    { images: ['/images/men/5.jpeg'], name: 'Casual Shirt', price: 2200 },
    { images: ['/images/men/6.jpeg'], name: 'Denim Shirt', price: 2400 },
    { images: ['/images/men/7.jpeg'], name: 'Flannel Shirt', price: 2300 },
    { images: ['/images/men/8.webp'], name: 'Chino Trousers', price: 2600 },
    { images: ['/images/men/9.jpeg'], name: 'Slim Fit Trousers', price: 2700 },
    { images: ['/images/men/10.jpeg'], name: 'Casual Trousers', price: 2500 },
    { images: ['/images/men/11.jpeg'], name: 'Long Sleeve T-Shirt', price: 2000 },
    { images: ['/images/men/12.jpeg'], name: 'Polo T-Shirt', price: 1900 },
    { images: ['/images/men/13.jpeg'], name: 'Henley T-Shirt', price: 2100 },
    { images: ['/images/men/14.jpeg'], name: 'Sleeveless T-Shirt', price: 1800 },
    { images: ['/images/men/1.webp'], name: 'Basic T-Shirt', price: 1500 },
    { images: ['/images/men/7.jpeg'], name: 'Flannel Shirt', price: 2300 },
    { images: ['/images/men/6.jpeg'], name: 'Denim Shirt', price: 2400 },
    { images: ['/images/men/7.jpeg'], name: 'Flannel Shirt', price: 2300 },
    { images: ['/images/men/8.webp'], name: 'Chino Trousers', price: 2600 },
    { images: ['/images/men/9.jpeg'], name: 'Slim Fit Trousers', price: 2700 },
    
  ];

  return (
    <div className="flex flex-col w-full">
    <NavBar />
    <div className="w-full h-16">
      <Image
        src={menscolleimg}
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

export default MenCollectionPage;
