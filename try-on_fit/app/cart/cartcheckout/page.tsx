import CartItem from "@/app/components/CartItem";
import Total from "@/app/components/Total";


export default function CartCheckout(){
       


    return (
        <>
        <h3><b>Your Cart</b></h3>

        <div id = "page" className="flex w-full">
        
        <div id="Cart" className ="w-2/3 ml-11 mr-11 ">
            <CartItem name="Skinny Dress" color="Color" price="Rs.3000.00" size="XL"/>
            <CartItem name="Skinny Dress" color="Color" price="Rs.3000.00" size="XL"/>
            <CartItem name="Skinny Dress" color="Color" price="Rs.3000.00" size="XL"/>
        </div>

        <div id="sub" className="bg-main-lighter shadow-md rounded w-1/3 mr-11 py-8 max-h-72 flex flex-col items-center">
        <h3 className="text-center font-bold mb-4">Order Summary</h3>

        <Total subamount={4500} discount={500} total={4000}/>    

    </div>
</div>
     </>
        
        
    );

}