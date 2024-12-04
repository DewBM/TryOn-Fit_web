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


export const handleOrder = async (orderData: {
    customer_id: number;
    order_items: { product_id: number; quantity: number }[];
  }) => {
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Failed to create order');
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };
  