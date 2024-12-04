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


export const fitOn = async (variant_id: string) => {
    const data = {
        variant_id: variant_id
    }

    const resp = await customFetch('/fiton', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    });

    if (resp)
        return resp;
    else {
        console.error("Couldn't fiton garment.");
        return {
            isSuccess: false,
            msg: "Server Error",
            error: "Response not received"
        };
    }
}