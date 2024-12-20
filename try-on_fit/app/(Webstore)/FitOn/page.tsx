'use client'
import { useEffect, useState } from 'react';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/navigation';

const FitOn = () => {
    const [images, setImages] = useState([]);

    const [activeImg, setActiveImage] = useState();
    const [amount, setAmount] = useState(1);
    const router = useRouter();

    function getArray<T>(key: string): T[] {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : [];
    }

    useEffect(() => {
        const loadImages = async () => {
            const image_paths = getArray<string>('generated_images');
        }

        loadImages();
    }, []);

    return (
        <div>
            <NavBar />
            <section className='py-36 flex flex-col justify-center items-center'>
                <div className="items-center align-middle w-[500px] h-[50px] bg-main-lighter justify-center rounded-xl text-center pb-10 shadow-2xl">
                    <p className="text-2xl font-bold font-sans pt-2">Fit On Room</p>
                </div>
                <div className='px-48 py-10 flex flex-row gap-2'>
                    {/* <div className='flex flex-col gap-7 justify-between h-full'>
                        {Object.values(images).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className='w-24 h-24 rounded-md cursor-pointer'
                                onClick={() => setActiveImage(img)}
                            />
                        ))}
                    </div> */}
                    <div className='flex-grow flex flex-col items-center'>
                        <img
                            src={activeImg}
                            alt=""
                            className='h-[70%] aspect-square object-cover rounded-xl'
                        />
                        <div className="flex flex-row justify-between mt-10 w-[60%]">
                            <button className='bg-main-dark text-white font-normal py-3 px-8 rounded-xl'>Dicard</button>
                            <button className='bg-main-dark text-white font-normal py-3 px-8 rounded-xl'>Add to Cart</button>
                        </div>
                    </div>
                    <div className='flex flex-col gap-7 justify-between h-full'>
                        {Object.values(images).map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt=""
                                className='w-24 h-24 rounded-md cursor-pointer'
                                onClick={() => setActiveImage(img)}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default FitOn;
