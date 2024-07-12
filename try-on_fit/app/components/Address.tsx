'use client'

import { useState } from 'react';
import Button from "./Button";

export default function Address({ number, city, town, tele } : { number: string, city: string, town: string, tele: string }) {
    const [isEditingAddress, setIsEditingAddress] = useState(false);
    const [isEditingPhone, setIsEditingPhone] = useState(false);
    const [editableNumber, setEditableNumber] = useState(number);
    const [editableCity, setEditableCity] = useState(city);
    const [editableTown, setEditableTown] = useState(town);
    const [editableTele, setEditableTele] = useState(tele);

    return (
        <div className="bg-main-lighter shadow-md rounded p-4 ml-11 mr-11 place-items-start py-7">
            <p><b>+Change Your Delivery Details</b></p>

            <div className="flex-col mb-4 mt-3 text-left">
                <p><b>Address:</b></p>
                {isEditingAddress ? (
                    <div>
                        <input 
                            type="text" 
                            value={editableNumber} 
                            onChange={(e) => setEditableNumber(e.target.value)} 
                            className="mb-1 border-b-2 border-black"
                        />
                        <input 
                            type="text" 
                            value={editableCity} 
                            onChange={(e) => setEditableCity(e.target.value)} 
                            className="mb-1 border-b-2 border-black"
                        />
                        <input 
                            type="text" 
                            value={editableTown} 
                            onChange={(e) => setEditableTown(e.target.value)} 
                            className="mb-1 border-b-2 border-black"
                        />
                    </div>
                ) : (
                    <div onClick={() => setIsEditingAddress(true)} className="cursor-pointer underline">
                        <p>No.{editableNumber}</p>
                        <p>{editableCity}</p>
                        <p>{editableTown}</p>
                    </div>
                )}
            </div>

            <div className="flex-col text-left">
                <p><b>Phone Number:</b></p>
                {isEditingPhone ? (
                    <input 
                        type="text" 
                        value={editableTele} 
                        onChange={(e) => setEditableTele(e.target.value)} 
                        className="mb-1 border-b-2 border-black"
                    />
                ) : (
                    <div onClick={() => setIsEditingPhone(true)} className="cursor-pointer underline">
                        <p>+94 {editableTele}</p>
                    </div>
                )}
            </div>

            <Button className="ml-11" type="button">Update</Button>
        </div>
    );
};
