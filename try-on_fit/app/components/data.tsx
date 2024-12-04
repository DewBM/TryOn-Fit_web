import React from "react";
const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "PRODUCT_NAME", uid: "product_name", sortable: true },
  { name: "QUANTITY", uid: "quantity", sortable: true },
  { name: "SUPPLIER_ID", uid: "supplier_id", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" },
  {name: "Price", uid: "price", sortable: true},
];


const statusOptions = [
  { name: "Available", uid: "available" },
  { name: "Unavailable", uid: "unavailable" },
];

const products = [
  {
    id: 1,
    product_name: "Blouse",
    quantity: "100",
    supplier_id: "345",
    status: "available",
    price: "Rs.2000.00",
    avatar: "/images/women/1.webp",
  },
  {
    id: 2,
    product_name: "Blouse",
    quantity: "123",
    supplier_id: "123",
    status: "unavailable",
    avatar: "/images/women/2.webp",
    price: "Rs.2000.00",
  },
  {
    id: 3,
    product_name: "Blouse",
    quantity: "890",
    supplier_id: "567",
    status: "available",
    avatar: "/images/women/3.webp",
    price: "Rs.2000.00",
  },
  {
    id: 4,
    product_name: "Blouse",
    quantity: "456",
    supplier_id: "897",
    status: "unavailable",
    avatar: "/images/women/4.webp",
    price: "Rs.2000.00",
  },
  {
    id: 5,
    product_name: "Blouse",
    quantity: "900",
    supplier_id: "3487",
    status: "available",
    avatar: "/images/women/5.webp",
    price: "Rs.2000.00",
  },
  {
    id: 6,
    product_name: "Blouse",
    quantity: "234",
    supplier_id: "57",
    avatar: "/images/women/1.webp",
    status: "available",
    price: "Rs.2000.00",
  },
  {
    id: 7,
    product_name: "Blouse",
    quantity: "543",
    supplier_id: "5",
    status: "available",
    avatar: "/images/women/5.webp",
    price: "Rs.2000.00",
  },
  {
    id: 8,
    product_name: "Blouse",
    quantity: "12",
    supplier_id: "7",
    status: "available",
    avatar: "/images/women/1.webp",
    price: "Rs.2000.00",
  },
  {
    id: 9,
    product_name: "Blouse",
    quantity: "43",
    supplier_id: "8",
    status: "unavailable",
    avatar: "/images/5.webp",
    price: "Rs.2000.00",
  },
  {
    id: 10,
    product_name: "Blouse",
    quantity: "2",
    supplier_id: "567",
    status: "unavailable",
    avatar: "/images/1.webp",
    price: "Rs.2000.00",
  },
  {
    id: 11,
    product_name: "Blouse",
    quantity: "89",
    supplier_id: "12",
    status: "unavailable",
    avatar: "/images/5.webp",
    price: "Rs.2000.00",
  },
  {
    id: 12,
    product_name: "Blouse",
    quantity: "23",
    supplier_id: "23",
    status: "available",
    avatar: "/images/4.webp",
    price: "Rs.2000.00",
  },
  {
    id: 13,
    product_name: "Blouse",
    quantity: "12",
    supplier_id: "17",
    status: "unavailable",
    avatar: "/images/3.webp",
    price: "Rs.2000.00",
  },
  {
    id: 14,
    product_name: "Blouse",
    quantity: "23",
    supplier_id: "2",
    status: "available",
    avatar: "/images/2.webp",
    price: "Rs.2000.00",
  },
  {
    id: 15,
    product_name: "Blouse",
    quantity: "89",
    supplier_id: "51",
    status: "unavailable",
    avatar: "/images/2.webp",
    price: "Rs.2000.00",
  },
];

export { columns, products, statusOptions };





