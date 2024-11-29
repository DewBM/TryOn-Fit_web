"use client";
import React from "react";
import { FC } from "react";

interface OrderDetailsCardProps {
  title: string;
  details: { label: string; value: string }[];
}

const OrderDetailsCard: FC<OrderDetailsCardProps> = ({ title, details }) => {
  return (
    <div style={{ padding: "16px", maxWidth: "400px" }}>
      <h2
        style={{ fontSize: "25px", marginBottom: "12px", fontWeight: "bold" }}
      >
        {title}
      </h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {details.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "8px 0",
              borderBottom:
                index < details.length - 1 ? "1px solid #eee" : "none",
            }}
          >
            <span style={{ fontWeight: "bold" }}>
              {item.label}:
            </span>
            <span style={{ color: "#777" }}>{item.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetailsCard;
