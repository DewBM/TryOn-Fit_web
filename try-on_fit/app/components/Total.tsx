'use client'

import React from "react";
import Button from "@/app/components/Button";

export default function Total(
    {subamount , discount} :
    {subamount: number, 
     discount: number}
)

{

    const total = subamount - discount;

    return(
        <div>
            <div id="order-summary" className="flex flex-col items-center h-full p-4 sm:p-6 md:p-8">
                <table className="table-auto w-full mb-2 sm:mb-4 md:mb-6">
                    <tbody>

                        <tr>
                            <td className="px-4 py-2">Sub Total:</td>
                            <td className="px-4 py-2 text-right">Rs.{subamount}</td>
                        </tr>

                        <tr>
                            <td className="px-4 py-2">Discount :</td>
                            <td className="px-4 py-2 text-right text-red-500">-Rs.{discount}</td>
                        </tr>

                        <tr>
                            <td colSpan={2} className="border-t-4 border-black font-bold py-2"></td>
                        </tr>

                        <tr>
                            <td className="px-4 py-2">Total :</td>
                            <td className="px-4 py-2 text-right">Rs.{total}</td>
                        </tr>

                    </tbody>

                </table>
                

                <Button className="mt-4 sm:mt-0 w-full sm:w-auto" type="button">&nbsp;&nbsp;&nbsp;Check Out&nbsp;&nbsp;&nbsp;</Button>
            </div>

        </div>

    )

    
}
