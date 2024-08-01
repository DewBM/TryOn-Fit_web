import React from 'react'
import Image from 'next/image'
import womenscolleimg from"@/public/images/banner1.png"
import NavBar from '@/app/components/NavBar'
import Filter from '@/app/components/Filter'
import Product from '@/app/components/Product'

function page() {
  return (
    <div className="flex flex-col w-full">
        <NavBar />
        <div className="w-full h-16 ">
        <Image
                  src={womenscolleimg}
                  alt=""
                  className=" w-full object-cover"
                />
        </div>
        <div className="flex flex-row pt-[60rem]">
            <div className="w-[20%]  pt-10 justify-start">
               <Filter />
            </div>
            <div className=" flex w-[80%] px-10 flex-wrap gap-[2rem] pt-2
             pb-[3rem] justify-center -z-1">
            <Product/><Product/><Product/><Product/><Product/><Product/>
            <Product/><Product/><Product/><Product/><Product/><Product/>
            <Product/><Product/><Product/><Product/><Product/><Product/>
            <Product/><Product/><Product/>
            {/* <Product/><Product/><Product/><Product/><Product/><Product/>
            <Product/><Product/><Product/><Product/><Product/><Product/> */}
          </div>
          </div>
          <div>
            <div className="flex justify-center ">
            <ul className="pagination flex flex-row gap-3 rounded-3xl bg-main-lighter py-5 px-10">
    <li className='rounded-full '><a href="#" aria-label="Previous">&laquo;</a></li>
    <li className='rounded-full '><a href="#" className="active">1</a></li>
    <li className='rounded-full '><a href="#">2</a></li>
    <li className='rounded-full '><a href="#">Next &raquo;</a></li>
  </ul>
            </div>

</div>

                
           
        
    </div>
  )
}

export default page
