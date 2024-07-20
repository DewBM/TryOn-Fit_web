export async function customFetch(endpoint: string, options: RequestInit, sendJWT: boolean) {
   let api = process.env.API_URL;
   const url = api + endpoint;

   if (!endpoint.includes("auth")){
      options.headers = {
         Authorization: `Bearer ${localStorage.getItem("access_token")}`
     };
   }

   try {
      // console.log(api);
      // console.log(options);
      let resp = await fetch(url, options);
      console.log(resp);
      let body = await resp.json();

      return body;
      // if (resp.ok) {
      //    try {
      //       return resp.json();
      //    } catch (e) {
      //       return {status: resp.status, msg: "JSON error"};
      //    }
      // }
      // else {
      //    return {status: resp.statusText, msg: resp.statusText};
      // }

   }
   catch (error) {
      console.log("Auth error: ", error);
   }
}