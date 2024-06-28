// import Button from "@/app/components/Button";

import Button from "@/app/components/Button";
import PasswordBox from "@/app/components/PasswordBox";
import TextBox from "@/app/components/TextBox";
import Image from "next/image";

export default function Signin() {

   async function signin(formData: FormData) {
      'use server'

      // const signinData = Object.fromEntries(formData);
      const signinData = {
         username: formData.get('username'),
         password: formData.get('password')
      }
      console.log(signinData);

      const params = {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(signinData)
      }

      try {
         const response = await fetch('http://localhost:8080/signin', params);
         if (response.ok) {
           const json = await response.json();
           console.log(json);
         } else {
           console.error('Failed to fetch data');
         }
       } catch (error) {
         console.error('Error:', error);
       }
   }


   return (
      <div className="flex flex-row shadow-md w-[800] h-[500] pb-6 pt-6 px-4">
         <div className=" rounded " >
          {/* <img src="/images/signin.png"></img>  */}
          <Image
                src="/images/signin.png"
                alt=""
                width={200}
                height={400}
               
              />
         
         </div>
      <div>
         <form action={signin} className="bg-main-lighter shadow-md rounded px-8 pt-3 pb-2 mb-4">
            <h2>Sign In</h2>
            <TextBox labelName={"Username"} id={"lg-uname"} inputType="text"/>
            <PasswordBox id={"lg-pwd"}/>
            <Button type="submit">Login</Button>
         </form>
      </div>
      </div>
   );
}