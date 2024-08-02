"use client";
import { useState } from "react";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";

import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleinform=()=>{
    router.push("inquiryForm")
  }
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-12 ">
        <section>
          <div className="pt-36 w-full px-8 lg:px-2 font-bold text-[1.5rem] text-center lg:text-left">
            <div className="mx-4 lg:mx-0">Help Center</div>
          </div>
          <div className="py-8 w-full px-6 lg:px-10 text-[1.2rem] flex flex-col lg:flex-row justify-center items-center text-center lg:text-left">
            Hi, what can we help you with?
          </div>
        </section>
        <section>
          <div className="bg-main-lighter p-5 mx-4 lg:mx-20 rounded-lg flex flex-wrap">
            <div className="font-bold my-1 mx-4 lg:mx-10 justify-center">
              Topics
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="my-3 mx-4 lg:mx-8">
                <Dropdown className="bg-white">
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="border-main-dark w-full my-3 hover:bg-main-lighter"
                    >
                      Awaiting Order Arrival
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem>When will my order arrive?</DropdownItem>
                    <DropdownItem>
                      What should I do if my order is delayed?
                    </DropdownItem>
                    <DropdownItem>
                      How can I track my order?
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="bg-white">
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="border-main-dark w-full my-3 hover:bg-main-lighter"
                    >
                      Ordering and Payment
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem>How do I place an order?</DropdownItem>
                    <DropdownItem>
                      What payment methods are accepted?
                    </DropdownItem>
                    <DropdownItem>
                      How do I use a discount code?
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="bg-white">
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="border-main-dark w-full my-3 hover:bg-main-lighter"
                    >
                      Virtual Fit-On
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem>
                      How do I use the Virtual Fit-On feature?
                    </DropdownItem>
                    <DropdownItem>
                      What if the Virtual Fit-On size doesn't match the actual
                      product?
                    </DropdownItem>
                    <DropdownItem>
                      Can I save my Virtual Fit-On measurements?
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="bg-white">
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="border-main-dark w-full my-3 hover:bg-main-lighter"
                    >
                      Recommendation
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem>
                      How can I get product recommendations?
                    </DropdownItem>
                    <DropdownItem>
                      What criteria are used for recommendations?
                    </DropdownItem>
                    <DropdownItem>
                      Can I customize my recommendation settings?
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <div className="my-3 mx-4 lg:mx-8">
                <Dropdown className="bg-white">
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="border-main-dark w-full my-3 hover:bg-main-lighter"
                    >
                      Refund
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem>
                      How do I request a refund?
                    </DropdownItem>
                    <DropdownItem>
                      How long does it take to process a refund?
                    </DropdownItem>
                    <DropdownItem>
                      What items are eligible for a refund?
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="bg-white">
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="border-main-dark w-full my-3 hover:bg-main-lighter"
                    >
                      Account Management
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem>
                      How do I create an account?
                    </DropdownItem>
                    <DropdownItem>
                      How do I update my account information?
                    </DropdownItem>
                    <DropdownItem>
                      What do I do if I forget my password?
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="bg-white">
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="border-main-dark w-full my-3 hover:bg-main-lighter"
                    >
                      Aftersales
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem>
                      How do I report a problem with my order?
                    </DropdownItem>
                    <DropdownItem>
                      What aftersales services are available?
                    </DropdownItem>
                    <DropdownItem>
                      How do I provide feedback on a product?
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <Dropdown className="bg-white">
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="border-main-dark w-full my-3 hover:bg-main-lighter"
                    >
                      Other
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu aria-label="Static Actions">
                    <DropdownItem>
                      How can I contact customer support?
                    </DropdownItem>
                    <DropdownItem>
                      Where can I find the latest news and updates?
                    </DropdownItem>
                    <DropdownItem>
                      How do I leave a review for a product?
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-main-lighter pt-5 pb-8 mt-10 mx-4 lg:mx-20 rounded-lg">
            <div className="font-bold my-1 mx-4 lg:mx-10 justify-center">
              Frequently Asked Questions
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <div>
                  <li className="pt-3 ml-8 lg:ml-40">
                    When will I receive my order?
                  </li>
                  <li className="pt-3 ml-8 lg:ml-40">How to cancel my order?</li>
                  <li className="pt-3 ml-8 lg:ml-40">
                    How do I track my package?
                  </li>
                  <li className="pt-3 ml-8 lg:ml-40">
                    What payment methods are accepted?
                  </li>
                </div>
              </div>
              <div>
                <div>
                  <li className="pt-3 ml-8 lg:ml-30">
                    The product I received does not match the description. What
                    can I do?
                  </li>
                  <li className="pt-3 ml-8 lg:ml-30">How to check my refund?</li>
                  <li className="pt-3 ml-8 lg:ml-30">
                    I cannot find order in my account.
                  </li>
                  <li className="pt-3 ml-8 lg:ml-30">
                    How can I verify my photo?
                  </li>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="text-lg mt-10 mb-8 justify-center items-center text-center">
            Need more help? Send us a help request.
          </div>
          <div className="justify-center items-center text-center my-15 bg-white pt-5 pb-12 mx-4 lg:mx-13">
            <button className="border-main-dark p-3 border rounded-xl my-15 hover:bg-main-lighter" onClick={handleinform}>
              Request
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
