import Total from "@/app/components/Total";
import Address from "@/app/components/Address";
import ConfirmItem from "@/app/components/ConfirmItem";

export default function CartAddress(){ 

    return(
        <div>
            
            <div id ="page" className= "flex w-full">

                <div id="Cart" className ="w-2/3 ml-11 mr-11 ">
                    <div className = "mb-8">
                    <Address number="54" city="Middeniya Road" town="Ebilipitiya" tele="712222018"/>
                    </div>
                    
                    <ConfirmItem amount={5} name ="Skinny Dress" color="Color" price="Rs.3000.00" size="XL"/>
                </div>

                <div id="sub" className="bg-main-lighter shadow-md rounded w-1/3 mr-11 ml-11 py-8 max-h-72 flex flex-col items-center">
                  <h3 className="text-center font-bold mb-4">Order Summary</h3>

                  <Total subamount={4500} discount={500} total={4000}/>   
                </div> 
            </div>
        </div>
    );
}