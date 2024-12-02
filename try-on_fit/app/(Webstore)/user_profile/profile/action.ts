import { customFetch } from "@/app/utils/auth";

export const fetchUserProfile = async () => {
  try {
    const resp = await customFetch("/user_profile/profile", {
      method: "GET",
      credentials: "include",
    });
    console.log("User profile response:", resp);

    if (resp) {
      if (resp.isSuccess) {
        return resp.data; 
      } else {
        return { msg: resp.msg };
      }
    } else {
      return { msg: "Server Error" };
    }
  } catch (error) {
    console.error("Error fetching user profile:", error);
    return { msg: "An error occurred while fetching user profile" };
  }
};

