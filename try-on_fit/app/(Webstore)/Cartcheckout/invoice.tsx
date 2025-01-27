// components/Invoice.tsx
import React from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
}

interface InvoiceProps {
  userName: string;
  email: string;
  address: Address;
  orderId: string;
  orderDate: string;
  orderStatus: "Paid" | "Pending" | "Cancelled";
  products: Product[];
}

const invoice: React.FC<InvoiceProps> = ({
  userName,
  email,
  address,
  orderId,
  orderDate,
  orderStatus,
  products,
}) => {
  const subTotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
  const deliveryFee = subTotal * 0.15;   
  const grandTotal = subTotal + deliveryFee;

  return (
    <div className="pt-16 pb-24">
      <div className="flex justify-end mb-4">
        <button
          type="button"
          className="bg-black text-white py-2 px-4 rounded"
          onClick={() => window.print()}
        >
          <i className="fa fa-print mr-2"></i> Print
        </button>
      </div>
      <div className="border rounded-lg shadow-lg bg-white">
        <div className="p-8" id="invoice">
          <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
            Invoice
          </h1>
          <div className="flex justify-between mb-8">
            <img
              src="/assets/images/Logo_green.png"
              alt="Logo"
              className="h-12"
            />
            <div className="text-right">
              <h2 className="font-bold text-lg">TryOnFit</h2>
              <p>No.66/A, Kaduwela Road, Battaramulla</p>
              <p>Western, Sri Lanka</p>
              <p>+94 77 123 456</p>
              <p>TryOnFit.customercare@gmail.com</p>
            </div>
          </div>
          <div className="flex justify-between mb-8">
            <div>
              <h3 className="text-gray-600">INVOICE TO:</h3>
              <h2 className="text-lg font-bold">{userName}</h2>
              <p>{address.addressLine1}</p>
              <p>{address.addressLine2}</p>
              <p>{address.city}</p>
              <p>
                <a href={`mailto:${email}`} className="text-blue-500 underline">
                  {email}
                </a>
              </p>
            </div>
            <div className="text-right">
              <h3 className="text-gray-600">Invoice ID:</h3>
              <h2 className="text-lg font-bold">{orderId}</h2>
              <p className="text-sm">Date: {orderDate}</p>
              <p>
                <span
                  className={`px-3 py-1 rounded text-white ${
                    orderStatus === "Paid"
                      ? "bg-green-500"
                      : orderStatus === "Pending"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {orderStatus}
                </span>
              </p>
            </div>
          </div>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2 text-left">
                  DESCRIPTION
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  UNIT PRICE
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  QUANTITY
                </th>
                <th className="border border-gray-300 px-4 py-2 text-right">
                  TOTAL
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    Rs. {product.price.toFixed(2)}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    {product.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-right">
                    Rs. {(product.price * product.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3}></td>
                <td className="border border-gray-300 px-4 py-2 text-right font-bold">
                  SUBTOTAL
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  Rs. {subTotal.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <td className="border border-gray-300 px-4 py-2 text-right font-bold">
                  DELIVERY
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  Rs. {deliveryFee.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td colSpan={3}></td>
                <td className="border border-gray-300 px-4 py-2 text-right font-bold">
                  GRAND TOTAL
                </td>
                <td className="border border-gray-300 px-4 py-2 text-right">
                  Rs. {grandTotal.toFixed(2)}
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="mt-8 text-center">
            <p className="font-bold">Thank you!</p>
            <p className="text-sm text-gray-500">
              For any inquiries, contact us via{" "}
              <a
                href="mailto:TryOnFit.customercare@gmail.com"
                className="text-blue-500 underline"
              >
              Tryonfit.customercare@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default invoice;
