import Address from "@/app/components/Address";
import ConfirmItem from "@/app/components/ConfirmItem";
import Pay from "@/app/components/Pay";


export default function CartAddress() {
    return (
        <div className="bg-slate-50 p-4 sm:p-6 md:p-8">
            <div id="page" className="flex flex-col md:flex-row w-full">

                <div className="w-full md:w-3/5 md:ml-20 md:mr-20">
                <div className="bg-white shadow-md rounded grid grid-cols-1 md:grid-cols-5 gap-4 px-4 py-6 mb-20 mx-4 sm:px-6 sm:mx-6 md:mx-8 md:px-8 md:items-center2">
                    <p className = "text-lg"><b>Shipping Address</b></p>
                    <Address name="Sapna Nethmini" number="No.174/1" village="Middeniya" town="Hambantota" country="Sri Lanka" tele= "+94 761516307"/>
                    
                </div>

                

                    {/* <div className="mb-8">
                        <Address number="54" city="Middeniya Road" town="Ebilipitiya" tele="712222018" />
                    </div> */}


                    <ConfirmItem amount={5} name="Skinny Dress" color="Color" price="Rs.3000.00" size="XL" />
                </div>

                <div id="sub" className="bg-white shadow-md rounded w-full md:w-1/5 mt-8 md:mt-0 md:ml-20 py-6 max-h-80 flex flex-col items-center">
                    <h3 className="text-center font-bold mb-4">Order Summary</h3>
                    <Pay subamount={8500} discount={600} delivery={320} />
                </div>

            </div>
        </div>
    );
}
