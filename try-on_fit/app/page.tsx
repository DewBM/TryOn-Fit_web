import Image from "next/image";
import TextBox from "./components/TextBox";
import Button from "./components/Button";
import PasswordBox from "./components/PasswordBox";
 import Navigationbar from "./components/Navigationbar"


export default function Home() {
  return (
   <main>
    <div>
      <Navigationbar />
   
        
     {/* <Button />
       <PasswordBox id="passwordInput" /> */}
    </div>
   </main>
  );
}
