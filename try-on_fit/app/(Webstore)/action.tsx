import { customFetch } from "../utils/auth"

export const fetchProducts = async (search_prompt: string) => {
    const resp = await customFetch(`/search?prompt=${search_prompt}`, {});

    if (resp) 
        return resp;
    else {
        console.error("Caouldn't fetch products.");
        return {msg: "Server Error"};
    }
}