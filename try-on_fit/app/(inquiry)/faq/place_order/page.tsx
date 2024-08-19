"use client";
import React from "react";
import Answer from "@/app/components/answer";
import NavBar from "@/app/components/NavBar";
import Footer from "@/app/components/Footer";

const OrderPlacementPage = () => {
  return (
    <div>
      <NavBar />
      <div className="mx-16 my-10">
        <Answer
          topic="How do I place an order?"
          description="Placing an order on our platform is simple and straightforward. Just follow these steps:"
          content={
            <div>
              <ol className="list-decimal ml-5 mt-3">
                <li>
                  Browse Products:
                  <ul>
                    Start by browsing our wide selection of products. You can
                    use the search bar or navigate through the categories to
                    find the items you're interested in.
                  </ul>
                </li>
                <li>
                  Add to Cart:
                  <ul>
                    Once you've found a product you like, select the desired
                    quantity, size, or other options, and click on the "Add to
                    Cart" button. You can continue shopping or proceed to
                    checkout.
                  </ul>
                </li>
                <li>
                  Checkout:
                  <ul>
                    When you're ready to purchase, go to your cart by clicking
                    on the cart icon at the top right of the page. Review your
                    items, and click on the "Proceed to Checkout" button.
                  </ul>
                </li>
                <li>
                  Enter Shipping and Payment Information:
                  <ul>
                    Fill in your shipping address, choose your preferred
                    shipping method, and enter your payment details. Make sure
                    all the information is accurate before submitting your
                    order.
                  </ul>
                </li>
                <li>
                  Confirm and Place Your Order:
                  <ul>
                    Review your order one last time, and if everything looks
                    good, click on the "Place Order" button. You'll receive a
                    confirmation email with your order details shortly after.
                  </ul>
                </li>
              </ol>
            </div>
          }
          images={[
            "/images/faq/add_cart.png",
            "/images/faq/checkout.png",
            "/images/faq/pay.png",
          ]}
        />
      </div>
      <Footer />
    </div>
  );
};

export default OrderPlacementPage;
