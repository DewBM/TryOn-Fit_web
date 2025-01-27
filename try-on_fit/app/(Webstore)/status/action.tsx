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


const formatDateTimeSL = (dateString: string | undefined | null) => {
  if (!dateString) return 'Invalid Date'; // Handle undefined, null, or empty date string gracefully

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return 'Invalid Date'; // Check if the date is invalid

  // Format the date and time to Sri Lankan format (DD/MM/YYYY HH:mm:ss AM/PM)
  return new Intl.DateTimeFormat('en-GB', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true, // Ensures AM/PM format
    timeZone: 'Asia/Colombo', // Sri Lankan timezone
  }).format(date);
};

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
        // Log order structure for debugging
        console.log("Order data:", order);

        // Format order_date and delivery_date to Sri Lankan format
        const formattedOrderDate = order.order_date ? formatDateTimeSL(order.order_date) : 'Invalid Date';
        const formattedDeliveryDate = order.delivery_date ? formatDateTimeSL(order.delivery_date) : 'Invalid Date';

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
