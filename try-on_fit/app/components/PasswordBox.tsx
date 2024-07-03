'use client'

import React from "react";
import TextBox from "./TextBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function PasswordBox({id} : {id: String}) {
   const [visible, setVisible] = React.useState(false);

   return (
      <div>
         <TextBox labelName={"password"} id={id} inputType={visible? "text" : "password"}></TextBox>
         <span onClick={()=> setVisible(!visible)}>
            <FontAwesomeIcon icon={visible? faEyeSlash : faEye} style={{color:"var(--main-dark)"}}></FontAwesomeIcon>
         </span>
      </div>

   )
}





