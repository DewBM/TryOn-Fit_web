import Slider from "@/app/components/Slider";
import Product from "@/app/components/Product";
import Image from "next/image";
import Button from "@/app/components/Button";
import signupimg from "../../../public/images/aboutus.png";

export default function Home() {
  return (
<div>
<Slider />
    <div className="pt-[5rem] pb-[3rem]  items-center ">
        <div className="items-center w-[500px] h-[50px] bg-main-lighter justify-center rounded-xl text-center ">
            <p className="text-bold item-center text-[30px] ">New Arrivals!</p>
        </div>
        <div className=" flex flex-wrap gap-[3rem] pt-[5rem] pb-[3rem]">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
           
        </div>
        </div><div className="pl-[300px] pb-[200px]">
        <div className="flex flex-row w-[900px] h-[400px] bg-main-lighter rounded-xl">
          <div className="w-[40%]">
          <Image
            src={signupimg}
            alt="Auth Image"
            className=" rounded-l-lg shadow-xl mx-auto my-auto lg:col-span-3"
          />
          </div>
          <div className="w-[60%] text-wrap pt-10 px-5"> <p className="text-light item-center text-[18px] ">At TryOnFit, we believe that every individual deserves to f
            eel confident and stylish in their own skin. Founded in [Year], our team of fashion enthusiasts, tech innovators, and customer service professionals are dedicated to bringing you the 
            latest trends and timeless classics in a way that’s easy, accessible, and tailored just for you
            </p>
            <div className="">
            <Button type="submit" className=" w-[100px] py-1.5 ml-3  px-28 m-0 text-start">
                Expolore More!
              </Button>
            </div>
            </div>
            </div>
       
    </div>

</div>
  
  );
}