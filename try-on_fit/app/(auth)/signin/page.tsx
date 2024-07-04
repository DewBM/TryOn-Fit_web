// import Button from "@/app/components/Button";

import Button from "@/app/components/Button";
import PasswordBox from "@/app/components/PasswordBox";
import Layout from "../layout";
import TextBox from "@/app/components/TextBox";
import Image from "next/image";
import signupimg from "../../../public/imgsigIn.jpg";

export default function Signin() {
  async function signin(formData: FormData) {
    "use server";

    // const signinData = Object.fromEntries(formData);
    const signinData = {
      username: formData.get("username"),
      password: formData.get("password"),
    };
    console.log(signinData);

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signinData),
    };

    try {
      const response = await fetch("http://localhost:8080/signin", params);
      if (response.ok) {
        const json = await response.json();
        console.log(json);
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Layout>
      <div className="grid  lg:grid-cols-12 mb-0  rounded mx-8 ">
        <div className="lg:col-span-3 lg:col-start-4">
          <Image
            src={signupimg}
            alt="Auth Image"
            className=" rounded-l-lg mx-auto my-auto lg:col-span-3"
          />
        </div>
        <div className="lg:col-span-3 lg:col-start-7">
          <form
            action={signin}
            className="bg-main-lighter shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className=" sm:col-span-4 text-4xl font-extrabold mt-2	mb-6">
              <h1>Sign In</h1>
            </div>

            <div className="sm:col-span-4 px-0 mt-2">
              <TextBox
                labelName={"Username"}
                id={"lg-uname"}
                inputType="text"
              />
            </div>
            <div className="sm:col-span-4 px-0 mt-3">
              <PasswordBox
                labelName={"Password"}
                id={"lg-pwd"}
                showEyeIcon={true}
              />
            </div>
            <div className="sm:col-span-4 px-0 mt-3">
              <Button type="submit" className="py-1.5 mr-0 mt-1 px-28">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
