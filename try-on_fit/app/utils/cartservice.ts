export const getCart = async () => {
    try {
      const res = await fetch('/api/cart');
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching cart", error);
      throw error; // Let the calling component handle the error
    }
  };
  