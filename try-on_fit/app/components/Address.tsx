'use client'

import { useState } from 'react';
import Button from "./Button";

export default function Address({name, number, village , town ,country,tele}
 : {name: String, number: String, village: String, town: String, country: String, tele:String}){
    
    return(
        <div className = "text-sm justify-start">
            <p>{name}</p>
            <p>{number}</p>
            <p>{village}</p>
            <p>{town}</p>
            <p>{country}</p>
            <p>{tele}</p>
        </div>


 )

}