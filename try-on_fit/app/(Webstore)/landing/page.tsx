import Slider from "@/app/components/Slider";
import Product from "@/app/components/Product";
import Image from "next/image";
import Button from "@/app/components/Button";
import aboutusimg from "../../../public/images/aboutus.png";
import Shopnowcard from "@/app/components/Helper/Shopnowcard";



export default function Home() {
  return (
    <div>
      <section>
        <div className="pt-24">
          <Slider />
        </div>
      </section>
      <section>
        <div className="flex flex-col  pt-20 px-20">
          <div className=" flex items-center justify-center ">
          <div className="items-center align-middle w-[500px] h-[50px] bg-main-lighter justify-center rounded-xl text-center pb-10 shadow-2xl">
              <p className="text-2xl font-bold font-sans pt-2">New Arrivals</p>
            </div>
          </div>

          <div className=" flex flex-wrap gap-[5.5rem] pt-[5rem] pb-[3rem] ">
            <Product /> <Product /> <Product /> <Product />
            <Product /> <Product /> <Product /> <Product />
          </div>
        </div>
      </section>

      <section>
        <div className=" flex flex-col pt-20 px-20 flex-wrap">
          <div className=" flex  flex-col items-center justify-center gap-20 ">
            <div className="items-center align-middle w-[500px] h-[50px] bg-main-lighter justify-center rounded-xl text-center pb-10 shadow-2xl">
              <p className="text-2xl font-bold font-sans pt-2">About us</p>
            </div>
          
          <div className="flex flex-row w-[900px] h-[400px] bg-main-lighter rounded-xl ">
            <div className="w-[40%]">
              <Image
                src={aboutusimg}
                alt=""
                className=" h-[400px] rounded-l-lg shadow-xl mx-auto "
              />
            </div>
            <div className="w-[60%] text-wrap pt-10 px-5">
              <p className="text-light text-balance item-center text-[18px] ">
                At TryOnFit, we believe that every individual deserves to f eel
                confident and stylish in their own skin. Founded in [Year], our
                team of fashion enthusiasts, tech innovators, and customer
                service professionals are dedicated to bringing you the latest
                trends and timeless classics in a way that’s easy, accessible,
                and tailored just for you
              </p>
<div className=" flex justify-start pt-10"><Button
                type="submit"
                className=" w-[200px]  ml-3  "
              >
                Get More Us!
              </Button></div>
              
            </div>
          </div>
        </div>
        </div>
      </section>


      <section>
        <div className="flex flex-col  pt-20 px-20">
          <div className=" flex items-center justify-center ">
            <div className="items-center align-middle w-[500px] h-[50px] bg-main-lighter justify-center rounded-xl text-center shadow-2xl">
              <p className="text-2xl font-bold font-sans pt-2">Shop Now!</p>
            </div>
          </div>

          <div className=" flex flex-wrap justify-between pt-[5rem] pb-[3rem] ">
          <Shopnowcard images={["/images/women.jpg"]} title={"Women's collection"} />
          <Shopnowcard images={["/images/men.jpg"]} title={"Men's collection"} />
          <Shopnowcard images={["/images/kids.jpg"]} title={"Kid's collection"}  />
     
          </div>
        </div>
      </section>
    </div>
  );
}
