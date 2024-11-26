
import CartItem from "@/app/components/CartItem";
import { customFetch } from "@/app/utils/auth";
import { METHODS } from "http";
import { headers } from "next/headers";

export const fetchCart = async () => {
  
    const resp= await customFetch('/cart', {
      method:"GET",
      credentials:"include"
    });
    console.log("response:", resp);
  
    if (resp) {
      if (resp.isSuccess) {
        return resp;
      }else
      return {msg: resp.msg}
    }
    else {
      return {msg: "Server Error"};
    }
   
  }

