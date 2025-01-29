import { customFetch } from "@/app/utils/auth";

// // export const orderfetch = async () => {
// //   try {
// //     const resp = await customFetch('/order/getorderId', {
// //       method: "GET",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       credentials: "include",
// //     });

// //     console.log("response:", resp);

// //     if (resp?.isSuccess) {
// //       return resp;
// //     } else {
// //       return { msg: resp?.msg || "Unknown error occurred" };
// //     }
// //   } catch (error) {
// //     console.error("Error fetching order:", error);
// //     return { msg: "Network or server error" };
// //   }
// // }


// // Ensure `formatDate` handles undefined or incorrect date formats
// const formatDate = (dateString: string | undefined | null) => {
//   if (!dateString) return 'Invalid Date'; // Handle undefined, null, or empty date string gracefully

//   const date = new Date(dateString);
//   if (isNaN(date.getTime())) return 'Invalid Date'; // Check if the date is invalid

//   // Format the date to 'DD/MM/YYYY'
//   return new Intl.DateTimeFormat('en-GB', {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//   }).format(date);
// };

// export const orderfetch = async () => {
//   try {
//     const resp = await customFetch('/order/getorderId', {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     });

//     console.log("Response from server:", resp); // Log the response structure

//     if (resp?.isSuccess && resp.data) {
//       // If the response contains 'data', process the orders
//       const ordersWithFormattedDates = resp.data.map((order: any) => {
//         // Log order structure for debugging
//         console.log("Order data:", order);

//         // Ensure both order_date and delivery_date exist and are in the correct format
//         const formattedOrderDate = order.order_date ? formatDate(order.order_date) : 'Invalid Date';
//         const formattedDeliveryDate = order.delivery_date ? formatDate(order.delivery_date) : 'Invalid Date';

//         return {
//           ...order,
//           order_date: formattedOrderDate,
//           delivery_date: formattedDeliveryDate,
//         };
//       });

//       return { ...resp, data: ordersWithFormattedDates };
//     } else {
//       return { msg: resp?.msg || "Unknown error occurred" };
//     }
//   } catch (error) {
//     console.error("Error fetching order:", error);
//     return { msg: "Network or server error" };
//   }
// };







// const formatDateTimeSL = (dateString: string | undefined | null) => {
//   if (!dateString) return 'Invalid Date'; // Handle undefined, null, or empty date string gracefully

//   const date = new Date(dateString);
//   if (isNaN(date.getTime())) return 'Invalid Date'; // Check if the date is invalid

//   // Format the date and time to Sri Lankan format (DD/MM/YYYY HH:mm:ss AM/PM)
//   return new Intl.DateTimeFormat('en-GB', {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//     hour12: true, // Ensures AM/PM format
//     timeZone: 'Asia/Colombo', // Sri Lankan timezone
//   }).format(date);
// };

// export const orderfetch = async () => {
//   try {
//     const resp = await customFetch('/order/getorderId', {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       credentials: "include",
//     });

//     console.log("Response from server:", resp); // Log the response structure

//     if (resp?.isSuccess && resp.data) {
//       // If the response contains 'data', process the orders
//       const ordersWithFormattedDates = resp.data.map((order: any) => {
//         // Log order structure for debugging
//         console.log("Order data:", order);

//         // Format order_date and delivery_date to Sri Lankan format
//         const formattedOrderDate = order.order_date ? formatDateTimeSL(order.order_date) : 'Invalid Date';
//         const formattedDeliveryDate = order.delivery_date ? formatDateTimeSL(order.delivery_date) : 'Invalid Date';

//         return {
//           ...order,
//           order_date: formattedOrderDate,
//           delivery_date: formattedDeliveryDate,
//         };
//       });

//       return { ...resp, data: ordersWithFormattedDates };
//     } else {
//       return { msg: resp?.msg || "Unknown error occurred" };
//     }
//   } catch (error) {
//     console.error("Error fetching order:", error);
//     return { msg: "Network or server error" };
//   }
// };




// Function to convert ISO date string to Sri Lankan date format (yyyy-mm-dd)
const formatDateTimeSL = (isoDate: string): string => {
  // Convert the ISO date string to a Date object
  const date = new Date(isoDate);
  
  // Adjust to Sri Lankan time (UTC +5:30)
  date.setMinutes(date.getMinutes() + 330); // Add 330 minutes (5 hours 30 minutes)

  // Format the date as 'yyyy-mm-dd'
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

// Function to fetch orders and format order_date and delivery_date to Sri Lankan time format
export const orderfetch = async () => {
  try {
    const resp = await customFetch('/order/getorderId', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    console.log("Response from server:", resp); // Log the response structure

    if (resp?.isSuccess && resp.data) {
      // If the response contains 'data', process the orders
      const ordersWithFormattedDates = resp.data.map((order: any) => {
        // Log the structure of each order to debug missing fields
        console.log("Order data:", order);

        // Access the first item in the status.data array to get orderDate and deliveryDate
        const orderDetails = order.status?.data?.[0];  // Using optional chaining to safely access the data

        // Format orderDate and deliveryDate to Sri Lankan format
        const formattedOrderDate = orderDetails?.orderDate
          ? formatDateTimeSL(orderDetails.orderDate)
          : 'No Order Date';
        
        const formattedDeliveryDate = orderDetails?.deliveryDate
          ? formatDateTimeSL(orderDetails.deliveryDate)
          : 'No Delivery Date';

        return {
          ...order,
          order_date: formattedOrderDate,
          delivery_date: formattedDeliveryDate,
        };
      });

      return { ...resp, data: ordersWithFormattedDates };
    } else {
      return { msg: resp?.msg || "Unknown error occurred" };
    }
  } catch (error) {
    console.error("Error fetching order:", error);
    return { msg: "Network or server error" };
  }
};


