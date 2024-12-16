"use client";

import React from "react";
import { Modal, Button } from "@nextui-org/react";

const OrderDetailsModal = ({
  isVisible,
  onClose,
  orderId,
  telephonenumber,
  status,
  deliveryaddress,
}) => {
  return (
    <Modal open={isVisible} onClose={onClose} closeButton>
      <Modal.Header>
        <h2 className="text-xl font-bold">Order Details</h2>
      </Modal.Header>
      <Modal.Body>
        <div className="space-y-4">
          <div>
            <span className="font-semibold">Order ID: </span>
            {orderId}
          </div>
          <div>
            <span className="font-semibold">Status: </span>
            {status}
          </div>
          <div>
            <span className="font-semibold">Delivery Address: </span>
            {deliveryaddress}
          </div>
          <div>
            <span className="font-semibold">Contact: </span>
            {telephonenumber}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onPress={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default OrderDetailsModal;
