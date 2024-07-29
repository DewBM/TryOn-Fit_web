import CartItem from "@/app/components/CartItem";
import Total from "@/app/components/Total";

export default function CartCheckout() {
    return (
        <>
            <div className="bg-slate-50 shadow-md rounded p-4 md:p-6 mb-10 mx-2">
                <div id="page" className="flex flex-col md:flex-row w-full p-4 sm:p-6 md:p-8">
                
                    <div className="w-full md:w-3/5 md:ml-20 md:mr-20">
                        <div className="bg-white shadow-md rounded p-4 md:p-6 mb-10 mx-2"> 
                            <p className="text-lg"><b>Shopping Cart</b></p>
    
                            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                                <div className="flex justify-center items-center mt-6 mb-4 md:mb-10">
                                    <input type="checkbox" className="form-checkbox shadow-md h-6 w-6 accent-slate-950 rounded"/>
                                </div>
    
                                <div className="flex justify-start items-center mt-6 mb-4 md:mb-10">
                                    <p className="justify-start">Select All Items</p>
                                </div>
                            </div>
                        </div>
    
                        <CartItem name="Skinny Dress" color="Color" price="Rs.3000.00" size="XL" status="unavailable" />
                        <CartItem name="Summer Skinny Dress" color="Color" price="Rs.3000.00" size="XL" status="available"/>
                        <CartItem name="Summer Skinny Dress" color="Color" price="Rs.3000.00" size="XL" status="available"/>
                    </div>
    
                    <div id="sub" className="bg-white shadow-md rounded w-full md:w-1/5 mt-8 md:mt-0 md:ml-20 py-6 max-h-80 flex flex-col items-center">
                        <h3 className="text-center font-bold mb-4 mt-3">Order Summary</h3>
                        <Total subamount={4500} discount={500} />
                    </div>
    
                </div>
            </div>
        </>
    );
}
