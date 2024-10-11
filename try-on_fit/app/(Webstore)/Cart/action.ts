export const fetchCart = async (userId: string, token: string) => {
    try {
      const response = await fetch(`http://localhost:8080/cart?userId=${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Add the Authorization header
        },
      });
  
      console.log("Response:", response); // Log the full response for debugging
  
      if (!response.ok) {
        const errorText = await response.text(); // Get response as text
        console.error("Error fetching cart:", errorText); // Log the error
        return []; // Return an empty array on error
      }
  
      const data = await response.json();
      if (data.isSuccess) {
        return data.cartItems; // Return the cart items
      } else {
        console.error("Error fetching cart:", data.msg);
        return [];
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
      return [];
    }
  };
  