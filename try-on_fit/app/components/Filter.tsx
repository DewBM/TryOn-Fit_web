import React from 'react'

function Filter() {
  return (
    <div className="flex justify-center">
    <div className="flex flex-col items-center justify-center my-8 w-[10rem] bg-main-lighter">
        <h1 className='text-xl font-bold align-middle pt-10 pb-3
        '>Filter</h1>
        {/* **********brands************** */}
   <div className="my-4 w-[10rem] pl-6">
    <div className="text-sm mx-auto text-start py-2 w-auto text-main-dark font-semibold"
    >Category</div>
    <ul className=' text-left space-y-3 py-1'>
        {["T-shirst","frock","Trouser","Blouse"].map((item, idx)=>(
        <li key ={idx}
        className='text-sm space-x-4 text-left font-medium flex justify-start items-center'>
            <div>
                <input className='h-6 w-5 mt-2 cursor-pointer'
                       type='checkbox'
                       value={item}
                    //    checked
                    //    onChange={()=>{}}
                       />

            </div>
            <div className="capitalize">{item}</div>
        </li>
    ))}
    </ul>
   </div>
   {/* *************brands********* */}
   <div className="my-4 w-[10rem] pl-6">
    <div className="text-sm mx-auto text-start py-2 w-auto font-semibold text-main-dark"
    >
        Brands
    </div>
    <ul className=' text-left space-y-3 py-1'>
        {["aaa","bbb","ccc","ddd","eee"].map((item, idx)=>(
        <li key ={idx}
        className='text-sm space-x-4 text-left font-medium flex justify-start items-center'>
            <div>
                <input className='h-6 w-5 mt-2 cursor-pointer'
                       type='checkbox'
                       value={item}
                    //    checked
                    //    onChange={()=>{}}
                       />

            </div>
            <div className="capitalize">{item}</div>
        </li>
    ))}
    </ul>
   </div>
   {/* *************size********* */}
   <div className="my-4 w-[10rem] pl-6">
    <div className="text-sm mx-auto text-start py-2 w-auto font-semibold text-main-dark"
    >
        Size
    </div>
    <ul className=' text-left space-y-3 py-1'>
        {["s","M","L","XL","XXL"].map((item, idx)=>(
        <li key ={idx}
        className='text-sm space-x-4 text-left font-medium flex justify-start items-center'>
            <div>
                <input className='h-6 w-5 mt-2 cursor-pointer'
                       type='checkbox'
                       value={item}
                    //    checked
                    //    onChange={()=>{}}
                       />

            </div>
            <div className="capitalize">{item}</div>
        </li>
    ))}
    </ul>
   </div>
    {/* *************Price********* */}
    <div className="my-4 w-[10rem] pl-6">
    <div className="text-sm mx-auto text-start py-2 w-auto font-semibold text-main-dark"
    >
       Price Range
    </div>
    <ul className=' text-left space-y-3 py-1'>
        {["1000 below","1000-1500","1500-2000","2000 above"].map((item, idx)=>(
        <li key ={idx}
        className='text-sm space-x-4 text-left font-medium flex justify-start items-center'>
            <div>
                <input className='h-6 w-5 mt-2 cursor-pointer'
                       type='checkbox'
                       value={item}
                    //    checked
                    //    onChange={()=>{}}
                       />

            </div>
            <div className="capitalize">{item}</div>
        </li>
    ))}
    </ul>
   </div>
   </div>
   </div>
  )
}

export default Filter