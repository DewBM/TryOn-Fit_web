export async function HashFetch(endpoint: string, options: RequestInit) {
    let api = process.env.NEXT_PUBLIC_API_URL;
    const url = api + endpoint;
 
    try {
       let resp = await fetch(url);
       if (resp && resp.ok){
          console.log(resp);
          let body = await resp.json();
          return body;
       }
       else {
          console.error('Response error');
       }
    }
    catch (error) {
       console.error("Auth error: ", error);
    }
 }