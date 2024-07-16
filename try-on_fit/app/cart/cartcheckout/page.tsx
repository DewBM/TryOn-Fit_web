import CartItem from "@/app/components/CartItem";
import Total from "@/app/components/Total";

export default function CartCheckout() {
    return (
        <>
            <h3 className="text-center font-bold text-xl mb-4">Your Cart</h3>

            <div id="page" className="flex flex-col md:flex-row w-full p-4 sm:p-6 md:p-8">
                <div id="Cart" className="w-full md:w-2/3 md:ml-4 md:mr-4">
                    <CartItem name="Skinny Dress" color="Color" price="Rs.3000.00" size="XL" />
                    <CartItem name="Skinny Dress" color="Color" price="Rs.3000.00" size="XL" />
                    <CartItem name="Skinny Dress" color="Color" price="Rs.3000.00" size="XL" />
                </div>

                <div id="sub" className="bg-main-lighter shadow-md rounded w-full md:w-1/3 mt-8 md:mt-0 md:ml-4 md:mr-4 py-8 max-h-72 flex flex-col items-center">
                    <h3 className="text-center font-bold mb-4">Order Summary</h3>
                    <Total subamount={4500} discount={500} total={4000} />
                </div>
            </div>
        </>
    );
}
