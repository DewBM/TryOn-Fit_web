import { HashFetch } from "@/app/utils/Hashfetch";


export const handlePayment = async () => {
    try {
        // Fetch hash from your backend
        const hashData = await HashFetch('merchant', {
            method: 'GET',
           
        });
        console.log(hashData);

       
      
    } catch (error) {
        console.error("Error fetching hash:", error);
    }
};