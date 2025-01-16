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


export const handleOrder = async (orderData: {
  customer_id: number;
  order_status: string;
  order_date: string;  // Ensure this is in string format (ISO format)
  delivery_date: string;  // Ensure this is in string format (ISO format)
  delivery_address: string;
  sub_total: number; // Convert to number type
  discount: number; // Convert to number type
  order_items: { 
    price: number; // Convert to number type
    quantity: number; // Convert to number type
    order_Id: number;
    item_Id: string;
    discount: number; // Convert to number type
  }[];
}) => {
  try {
    // Validate data (add custom validations if necessary)
    if (!orderData.customer_id || !orderData.sub_total || !orderData.order_items.length) {
      throw new Error('Invalid order data');
    }

    // Convert Date objects to ISO string format (if they are not already in string format)
    orderData.order_date = "2025-01-10T10:00:00Z";
    orderData.delivery_date ="2025-01-20T10:00:00Z";

    // Ensure correct types for sub_total, discount, and items
    const formattedOrderData = {
      ...orderData,
      sub_total: Number(orderData.sub_total),
      discount: Number(orderData.discount),
      order_items: orderData.order_items.map(item => ({
        ...item,
        price: Number(item.price),
        quantity: Number(item.quantity),
        discount: Number(item.discount),
      })),
    };
    console.log("order res",formattedOrderData);
    // Send POST request to the backend
    const response =  await customFetch('/order', {  // Adjust the API URL accordingly
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedOrderData),
    });

    if (!response) {
      const errorData = await response.json();
      throw new Error(errorData.msg || 'Failed to create order');
      window.alert("faild");
    }

    const result = await response.json();
    return result;
    window.alert("sucessfully add to order");
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};
