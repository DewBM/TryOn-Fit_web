import { customFetch } from "@/app/utils/auth";

export const Cartfetch = async () => {
  try {
    const resp = await customFetch('/cart', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    console.log("response:", resp);

    if (resp?.isSuccess) {
      return resp;
    } else {
      return { msg: resp?.msg || "Unknown error occurred" };
    }
  } catch (error) {
    console.error("Error fetching cart:", error);
    return { msg: "Network or server error" };
  }
}

 export const addToCart = async (cartData:{user_id: number, variant_id: string, quantity: number}) => {
    try {
      const resp = await fetch('http://localhost:8080/cart', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(cartData),
      });
  
      console.log("Add to Cart response:", resp);
  
      if (resp?.ok) {
        return resp;
      } else {
        return resp;
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
      return { msg: "Network or server error" };
    }
  






    
 
    // const reso = {
    //   isSuccess: true,
    //   data: [
    //     {
    //       cartItemId: 4,
    //       cartId: 2,
    //       variantId: "301",
    //       quantity: 1,
    //       name: "Jacket",
    //       color: null,
    //       price: 5000,
    //       description: "Stylish leather jacket with a sleek design.",
    //       userId: 3,
    //     },
    //     {cartItemId: 6,
    //         cartId: 2,
    //         variantId: "201",
    //         quantity: 1,
    //         name: "Pants",
    //         color: null,
    //         price: 8000,
    //         description: "Classic blue denim pants with a modern fit, perfect for both casual and semi-formal occasions.",
    //         userId: 3
    //     },
    //     {
    //         cartItemId: 7,
    //         cartId: 2,
    //         variantId: "502",
    //         quantity: 2,
    //         name: "Skirt",
    //         color: null,
    //         price: 6000,
    //         description: "Classic checkered skirt with a timeless pattern, suitable for various occasions.",
    //         userId: 3
    //     },
       
    //   ],
    // };
  
    // return reso.isSuccess ? reso.data : [];

};

