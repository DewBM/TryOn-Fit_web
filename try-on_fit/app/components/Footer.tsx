import React from 'react'
import Image from "next/image"

function Footer() {
  return (
    <div>
      <div className="bg-black text-white  h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10">
				<div className="p-5 w-[34%] ">
					<ul>
                        <div className="justify-center">
                        <Image
    src="/images/logo.png"
    alt=""
    width={200}
    height={200}

  /> 
                        </div>

						<p className="text-white font-light text-12px pb-6">
                        TryonFit is the most famouse clothing strore.you can select every clthings on to your
                         body mesurements. Not that you can choose any other fashionable design for your choices.lets shops with us.
						
						</p>
						<div className="flex gap-6 pb-5">


							 <div className="text-2xl cursor-pointer hover:text-main-dark" ></div>
							<div className="text-2xl cursor-pointer hover:text-main-dark" ></div>
							<div className="text-2xl cursor-pointer hover:text-main-dark" ></div>
							<div className="text-2xl cursor-pointer hover:text-main-dark" ></div> 
						</div>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Company</p>
						<li className="text-white text-md pb-3 font-light hover:text-main-dark cursor-pointer">
							About Us
						</li>
						<li className="text-white text-md pb-3 font-light hover:text-main-dark cursor-pointer">
							Product
						</li>
						<li className="text-white text-md pb-3 font-light hover:text-main-dark cursor-pointer">
						Account
						</li>
						<li className="text-white text-md pb-3 font-light hover:text-main-dark cursor-pointer">
							Contact Us
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">FAQ</p>
						<li className="text-white text-md pb-3 font-light hover:text-main-dark cursor-pointer">
							Account
						</li>
						<li className="text-white text-md pb-3 font-light hover:text-main-dark cursor-pointer">
							Orders
						</li>
						<li className="text-white text-md pb-3 font-light hover:text-main-dark cursor-pointer">
							Manage Orders
						</li>
						<li className="text-white text-md pb-3 font-light hover:text-main-dark cursor-pointer">
							Reviews
						</li>
					
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-white font-bold text-2xl pb-4">Support</p>
						<li className="text-white text-16 pb-3 font-light hover:text-main-dark cursor-pointer">
							Help Center
						</li>
						<li className="text-white text-16 pb-3 font-light hover:text-main-dark cursor-pointer">
							Most rated
						</li>
						<li className="text-white text-16 pb-3 font-light hover:text-main-dark cursor-pointer">
							Payments
						</li>
						<li className="text-white text-16 pb-3 font-light hover:text-main-dark cursor-pointer">
						Terms And Conditions
						</li>
						
					</ul>
				</div>
			</div>
             <hr className='px-3 mx-3'/>
           
			<div className="flex flex-row justify-between items-center text-center  p-10 bg-black h-5">
				<h1 className=" text-white font-light">
					© TryOnFit@2024 All rights reserved | 
						
				</h1>
                <h1 className=" text-white font-light">
					Terms and Conditions | Privacy Policies
						
				</h1>
			</div>
    </div>
  )
}

export default Footer