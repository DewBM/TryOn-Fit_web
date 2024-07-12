// import Button from "@/app/components/Button";

import Button from "@/app/components/Button";
import PasswordBox from "@/app/components/PasswordBox";
import Layout from "../layout";
import Link from "next/link";
import TextBox from "@/app/components/TextBox";
import Image from "next/image";
import signupimg from "../../../public/img_signIn.jpg";

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
      <div className="grid  lg:grid-cols-8 mb-0  rounded mx-8 ">
        <div className="lg:col-span-2 lg:col-start-3">
          <Image
            src={signupimg}
            alt="Auth Image"
            className=" rounded-l-lg shadow-xl mx-auto my-auto lg:col-span-3"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-5">
          <form
            action={signin}
            className="bg-main-lighter shadow-xl rounded-r-lg px-8 pt-3 pb-8 mb-1"
          >
            <div className=" sm:col-span-4 text-4xl font-extrabold 	mb-5">
              <h1>Log In</h1>
            </div>

            <div className="sm:col-span-4 px-0 mt-1.5">
              <TextBox
                labelName={"Username"}
                id={"lg-uname"}
                inputType="text"
              />
            </div>
            <div className="sm:col-span-4 mb-0 px-0 mt-2">
              <PasswordBox
                labelName={"Password"}
                id={"lg-pwd"}
                showEyeIcon={true}
              />
            </div>
            <div className="sm:col-span-4 font-medium leading-6 text-sm ml-44">
              <Link
                className="underline  text-red-400"
                href="http://localhost:8080/signup"
              >
                Froget password ?
              </Link>
            </div>
            <div className="sm:col-span-4 px-0 ">
              <Button type="submit" className="py-1.5 ml-8 px-24 m-4">
                Sign In
              </Button>
            </div>
            <div className="sm:col-span-4 text-stone-500 ml-8 leading-6 text-sm	mb-0">
              <p className="text-xs">
                Don't have an account ?
                <Link
                  className="underline text-main-dark"
                  href="http://localhost:8080/signup"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
