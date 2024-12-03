'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../app/components/Button';
import aboutusimg from '../public/images/aboutus.png';
import Shopnowcard from '../app/components/Helper/Shopnowcard';
import Slider from '../app/components/Slider';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' for hooks
import Product from './components/Product';
import { ProductType } from './types/custom_types';
import { fetchProducts } from './(Webstore)/action';

function Home() {
  const router = useRouter();

  const handlewomencollection = () => {
    router.push('womenscollection');
  };

  const handlemenscollection = () => {
    router.push('menscollection');
  };

  const handlekidscollections = () => {
    router.push('kidscollection');
  };
 
  // Define the items array

  // const items = [
  //   {
  //     images: ['/images/women/1.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/5.jpeg'],
  //     name: 'Shirt',
  //     price: 2900,
  //   },
  //   {
  //     images:['/images/women/13.webp'],
  //     name: 'Long Frock',
  //     price: 3999,
  //   },
  //   {
  //     images: ['/images/women/4.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/1.webp'],
  //     name: 't-shirts',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/5.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/4.webp'],
  //     name: 'T-shirts',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/1.webp'],
  //     name: 'Sleeve shirt',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/5.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/1.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/1.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },  // const items = [
  //   {
  //     images: ['/images/women/1.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/5.jpeg'],
  //     name: 'Shirt',
  //     price: 2900,
  //   },
  //   {
  //     images:['/images/women/13.webp'],
  //     name: 'Long Frock',
  //     price: 3999,
  //   },
  //   {
  //     images: ['/images/women/4.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/1.webp'],
  //     name: 't-shirts',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/5.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/4.webp'],
  //     name: 'T-shirts',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/1.webp'],
  //     name: 'Sleeve shirt',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/5.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/1.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/1.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/5.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/4.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/1.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/5.jpeg'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/4.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/6.jpeg'],
  //     name: 'Sleeveless shirts',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/9.jpeg'],
  //     name: 'Trouser',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/4.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/10.jpeg'],
  //     name: 'Trouser',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/5.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/4.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/1.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/1.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/5.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  // ];
  //   {
  //     images: ['/images/women/5.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/4.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/1.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/5.jpeg'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/4.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/6.jpeg'],
  //     name: 'Sleeveless shirts',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/9.jpeg'],
  //     name: 'Trouser',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/4.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/10.jpeg'],
  //     name: 'Trouser',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/5.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/4.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/1.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/men/1.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  //   {
  //     images: ['/images/women/5.webp'],
  //     name: 'Sleeve Blouse',
  //     price: 2900,
  //   },
  // ];


  const [items, setItems] = useState<ProductType[]>([]);

  useEffect(() => {
    const searchProducts = async () => {
      try {
        const result: any = await fetchProducts("solid");

        if (result.isSuccess) {
          setItems(result.data);
          console.log("Products: ", result.data);
        }
        else {
          alert(result.msg);
          console.error("Search Error: ", result.error);
        }
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
        setItems([]); // Handle error gracefully
      }
    };

    searchProducts();
  }, []);

  return (
    <div>
      <NavBar />

      <section>
        <div>
          <Slider />
        </div>
      </section>

      <section>
        <div className="flex flex-col pt-20 px-20">
          <div className="flex items-center justify-center">
            <div className="items-center align-middle w-[500px] h-[50px] bg-main-lighter justify-center rounded-xl text-center pb-10 shadow-2xl">
              <p className="text-2xl font-bold font-sans pt-2">New Arrivals</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-[2rem] pt-[5rem] pb-[3rem] justify-center">
            {items.map((item, index) => (
              <Product 
                key={index}
                img_front={item.img_front}
                name={item.name}
                price={item.price} 
                product_id={item.product_id} 
                variant_id={item.variant_id} 
                color={item.color} 
                design={item.design} 
                description={item.description}              
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col pt-20 px-20 flex-wrap">
          <div className="flex flex-col items-center justify-center gap-20">
            <div className="items-center align-middle w-[500px] h-[50px] bg-main-lighter justify-center rounded-xl text-center pb-10 shadow-2xl">
              <p className="text-2xl font-bold font-sans pt-2">About us</p>
            </div>

            <div className="flex flex-row w-[900px] h-[400px] bg-main-lighter rounded-xl">
              <div className="w-[40%]">
                <Image
                  src={aboutusimg}
                  alt=""
                  className="h-[400px] rounded-l-lg shadow-xl mx-auto"
                />
              </div>
              <div className="w-[60%] text-wrap pt-10 px-5">
                <p className="text-light text-balance item-center text-[18px]">
                  At TryOnFit, we believe that every individual deserves to feel confident and stylish in their own skin. Founded in [Year], our team of fashion enthusiasts, tech innovators, and customer service professionals are dedicated to bringing you the latest trends and timeless classics in a way that’s easy, accessible, and tailored just for you.
                </p>
                <div className="flex justify-start pt-10">
                  <Button type="submit" className="w-[200px] ml-3">
                    Get More Us!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col pt-20 px-20">
          <div className="flex items-center justify-center">
            <div className="items-center align-middle w-[500px] h-[50px] bg-main-lighter justify-center rounded-xl text-center shadow-2xl">
              <p className="text-2xl font-bold font-sans pt-2">Shop Now!</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-between pt-[5rem] pb-[3rem]">
            <Shopnowcard
              images={['/images/women.jpg']}
              title={"Women's collection"}
              onClick={handlewomencollection}
            />
            <Shopnowcard
              images={['/images/men.jpg']}
              title={"Men's collection"}
              onClick={handlemenscollection}
            />
            <Shopnowcard
              images={['/images/kids.jpg']}
              title={"Kid's collection"}
              onClick={handlekidscollections}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
function userState(arg0: never[]): [any, any] {
  throw new Error('Function not implemented.');
}

