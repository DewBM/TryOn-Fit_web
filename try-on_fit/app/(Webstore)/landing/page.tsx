import Slider from "@/app/components/Slider";
import Product from "@/app/components/Product";

export default function Home() {
  return (
<div>
<Slider />
    <div className="pt-[5rem] pb-[3rem] align-middle items-center ">
        <div className="item-center w-[500px] h-[50px] bg-main-lighter rounded-xl align-middle ">
            <p className="text-bold item-center text-[30px] ">New Arrivals!</p>
        </div>
        <div className=" flex flex-wrap gap-[3rem] pt-[5rem] pb-[3rem]">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>
    </div>

</div>
  
  );
}