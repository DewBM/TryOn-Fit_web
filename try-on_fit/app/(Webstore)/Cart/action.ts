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
};

