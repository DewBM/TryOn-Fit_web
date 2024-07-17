"use client"
import React, { useState } from 'react'
import NavBar from '@/app/components/NavBar'
import Footer from '@/app/components/Footer'

const ProductPage = () => {


    const [images, setImages] = useState({
        img1 : "https://static-01.daraz.lk/p/caccb75f3a806f44c05773e7ebc596dc.jpg_750x750.jpg_.webp",
        img2 : "https://static-01.daraz.lk/p/ceefebfb5c10ec9ed4aa3c2545772fa1.jpg_750x750.jpg_.webp",
        img3 : "https://static-01.daraz.lk/p/bbd4e0ab09951ab9dbce9a5cbfecd129.jpg_750x750.jpg_.webp" ,
        img4 : "https://static-01.daraz.lk/p/caccb75f3a806f44c05773e7ebc596dc.jpg_750x750.jpg_.webp"
     })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);


    return (
        <div>
            <section><NavBar /></section>
            <section>
        <div className=' px-20 py-28 flex flex-col justify-between lg:flex-row  lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='pt-10 w-[80%] h-full aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row w-[80%] justify-between h-24'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-main-dark font-semibold'>Long frocks</span>
                    <h1 className='text-3xl font-bold'>Fashionable Gflock Collection</h1>
                </div>
                <p className='text-gray-700'>
                Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                </p>
                <h6 className='text-2xl font-semibold'>RS 3999.00</h6>
                <div className='flex flex-row items-center gap-8'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-main-dark text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-main-dark text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <button className='bg-main-dark text-white font-semibold py-3 px-8 rounded-xl h-full'>Add to Cart</button>
                    <button className='bg-main-dark text-white font-semibold py-3 px-8 rounded-xl h-full'>Add to Fiton</button>
                
                </div>
            </div>
        </div>
        </section>
        <section><Footer/></section>
        </div>
    )
}

export default ProductPage