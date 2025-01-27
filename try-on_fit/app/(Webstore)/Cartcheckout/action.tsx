import { HashFetch } from "@/app/utils/Hashfetch";
import { customFetch } from "@/app/utils/auth";


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


// export const handleOrder = async (orderData: {
//   customer_id: number;
//   order_status: string
//   order_date: Date,
//   delivery_date:Date,
//   delivery_address:string,
//   sub_total: string,
//   discount: string,

//     order_items: { price:string; quantity: string ;order_Id:number ; item_Id:string; discount: string}[];
//   }) => {
//     try {
//       const response = await fetch('/order', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(orderData),
//       });
  
//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.msg || 'Failed to create order');
//       }
  
//       const result = await response.json();
//       return result;
//     } catch (error) {
//       console.error('Error creating order:', error);
//       throw error;
//     }
//   };





// export const handleOrder = async (orderData: {
//   customer_id: number;
//   order_status: string;
//   order_date: string;  // Use string format for date
//   delivery_date: string;  // Use string format for date
//   delivery_address: string;
//   sub_total: string;
//   discount: string;
//   order_items: { 
//     price: string;
//     quantity: string;
//     order_Id: number;
//     item_Id: string;
//     discount: string;
//   }[];
// }) => {
//   try {
//     // Validate data (add your custom validations as needed)
//     if (!orderData.customer_id || !orderData.sub_total || !orderData.order_items.length) {
//       throw new Error('Invalid order data');
//     }

//     // Convert Date objects to ISO string format
//     orderData.order_date = new Date(orderData.order_date).toISOString();
//     orderData.delivery_date = new Date(orderData.delivery_date).toISOString();

//     const response = await fetch('/order', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(orderData),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.msg || 'Failed to create order');
//     }

//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error('Error creating order:', error);
//     throw error;
//   }
// };








  
// export const handleOrder = async (orderData: {
//   customer_id: number;
//   order_items: { product_id: number; quantity: number }[];
// }) => {
//   try {
//     const response = await fetch('/api/orders', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(orderData),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.msg || 'Failed to create order');
//     }

//     const result = await response.json();
//     return result;
//   } catch (error) {
//     console.error('Error creating order:', error);
//     throw error;
//   }
// };




// currently used
// export const handleOrder = async (orderData: {
//   customer_id: number;
//   order_status: string;
//   order_date: string;  // Use string format for date
//   delivery_date: string;  // Use string format for date
//   delivery_address: string;
//   sub_total: number;
//   discount: number;
//   order_items: { 
//     item_Id: string;
//     quantity: number;
//     price: number;

//     // order_Id: number;
   
//     discount: number;
//   }[];
// }) => {
//   try {
//     // Validate required fields
//     if (
//       !orderData.customer_id || 
//       !orderData.sub_total || 
//       !orderData.order_items || 
//       orderData.order_items.length === 0
//     ) {
//       throw new Error("Invalid order data. Please check all required fields.");
//     }
//     console.log(orderData);

//     // 
   

//     console.log("Formatted Order Data:", orderData); // Debugging

//     const response = await customFetch('/order', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(orderData),
//     });

//     if (!response?.ok) {  // Use optional chaining to avoid undefined errors
//       const errorData = await response.text();
//       console.error("Server error:", errorData);
//       throw new Error(`Failed to create order: ${response.status} ${response.statusText}`);
//     }

//     const result = await response.json();
//     return result;
    
//   } catch (error) {
//     console.error("Error creating order:", error);
//     throw new Error("An error occurred while processing the order.");
//   }
// };


export const handleOrder = async (orderData: {
  customer_id: number;
  order_status: string;
  order_date: string;
  delivery_date: string;
  delivery_address: string;
  sub_total: number;
  discount: number;
  order_items: { 
    item_id: string;
    quantity: number;
    price: number;
    discount: number;
  }[];
}) => {
  try {
    // Validate required fields
    if (
      !orderData.customer_id || 
      !orderData.sub_total || 
      !orderData.order_items || 
      orderData.order_items.length === 0
    ) {
      throw new Error("Invalid order data. Please check all required fields.");
    }
    console.log("Formatted Order Data:", orderData); // Debugging
      

    const response = await fetch("http://localhost:8080/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
      credentials: "include", // Ensure cookies are sent with the request
    });


    // const response = await customFetch('/order', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(orderData),
    // });
 console.log(JSON.stringify(orderData));
    // Check if response is valid
    if (!response?.ok) {  // Use optional chaining to avoid undefined errors
      let errorMessage = "Failed to create order";
      try {
        const errorData = await response.text();
        errorMessage = `Failed to create order: ${errorData}`;
      } catch (err) {
        console.error("Error reading the response body:", err);
      }
      console.error("Server error:", errorMessage);
      throw new Error(errorMessage);
    }

    const result = await response.json();  // Parse the response body
    return result;
    console.log("result",result)
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("An error occurred while processing the order.");
  }
};
