import Total from "@/app/components/Total";
import Address from "@/app/components/Address";
import ConfirmItem from "@/app/components/ConfirmItem";

export default function CartAddress() {
    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div id="page" className="flex flex-col md:flex-row w-full">

                <div id="Cart" className="w-full md:w-2/3 md:ml-4 md:mr-4">
                    <div className="mb-8">
                        <Address number="54" city="Middeniya Road" town="Ebilipitiya" tele="712222018" />
                    </div>
                    <ConfirmItem amount={5} name="Skinny Dress" color="Color" price="Rs.3000.00" size="XL" />
                </div>

                <div id="sub" className="bg-main-lighter shadow-md rounded w-full md:w-1/3 mt-8 md:mt-0 md:ml-4 md:mr-4 py-8 max-h-72 flex flex-col items-center">
                    <h3 className="text-center font-bold mb-4">Order Summary</h3>
                    <Total subamount={4500} discount={500} total={4000} />
                </div>
            </div>
        </div>
    );
}
