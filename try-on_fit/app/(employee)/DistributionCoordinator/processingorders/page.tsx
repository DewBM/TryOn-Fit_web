"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  SortDescriptor,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/react";
import { PlusIcon } from "@/app/components/PlusIcon";
import { VerticalDotsIcon } from "@/app/components/VerticalDotsIcon";
import { ChevronDownIcon } from "@/app/components/ChevronDownIcon";
import { SearchIcon } from "@/app/components/SearchIcon";

const columns = [
  { uid: "order_id", name: "Order ID" },
  { uid: "order_date", name: "Order Date" },
  { uid: "sub_total", name: "Sub Total" },
  { uid: "order_status", name: "Order Status" },
  { uid: "actions", name: "Actions" },
];

const statusOptions = [
  { uid: "Processing", name: "Processing" },
  { uid: "Shipped", name: "Shipped" },
  { uid: "Completed", name: "Completed" },
  { uid: "Confirmed", name: "Confirmed" },
  { uid: "Delivered", name: "Delivered" },
];

const INITIAL_VISIBLE_COLUMNS = [
  "order_id",
  "order_date",
  "sub_total",
  "order_status",
  "actions",
];

type Order = {
  order_id: number;
  customer_id: string | null;
  order_date: string | null;
  order_status: string;
  delivery_date: string | null;
  delivery_address: string | null;
  sub_total: string | null;
  discount: string | null;
};

export default function Home() {
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [page, setPage] = useState(1);
  const [ordersData, setOrdersData] = useState<Order[]>([]);
  const [statusUpdated, setStatusUpdated] = useState(false);  // Track if status is updated
  const trackOrder = (orderId: number) => {
    router.push(`/DistributionCoordinator/processingorders/view_orders?order_id=${orderId}`);
  }; 
  // Fetch data from the API when the component mounts

 
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/order/getOrdersByStatus?status=Processing"
        );
        const data = await response.json();

        if (data.isSuccess) {
          setOrdersData(data.data);
          setStatusUpdated(false);
        } else {
          console.error(data.msg);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchOrders();
  }, [statusUpdated]);

  const pages = Math.ceil(ordersData.length / rowsPerPage);
  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const handleStatusChange = async (orderId: number, newStatus: string) => {
    setOrdersData((prevOrders) =>
      prevOrders.map((order) =>
        order.order_id === orderId
          ? { ...order, order_status: newStatus }
          : order
      )
    );

    try {
      const response = await fetch("http://localhost:8080/order/updateStatus", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          order_id: orderId,
          status: newStatus,
        }),
      });

      const result = await response.json();

      if (!result.isSuccess) {
        console.error(result.msg);
      } else {
        setStatusUpdated(true);
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const filteredItems = useMemo(() => {
    let filteredOrders = [...ordersData];

    if (hasSearchFilter) {
      filteredOrders = filteredOrders.filter((order) =>
        order.order_id.toString().includes(filterValue.toString())
      );
    }

    return filteredOrders;
  }, [ordersData, filterValue]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);



  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
      column: "order_id",  // Sort by 'order_id'
      direction: "ascending",  // In ascending order
    });
 const sortedItems = React.useMemo(() => {
     return [...items].sort((a: Order, b: Order) => {
       const first = a[sortDescriptor.column as keyof Order] as string | number;
       const second = b[sortDescriptor.column as keyof Order] as string | number;
   
       if (first < second) return sortDescriptor.direction === "ascending" ? -1 : 1;
       if (first > second) return sortDescriptor.direction === "ascending" ? 1 : -1;
       return 0; // If values are equal
     });
   }, [sortDescriptor, items]);

  const renderCell = useCallback(
    (order: Order, columnKey: React.Key) => {
      const cellValue = order[columnKey as keyof Order];

      switch (columnKey) {
        case "order_status":
          return (
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="light"
                  size="md"
                  style={{
                    backgroundColor: "#4d2d18",
                    color: "#fff",
                  }}
                >
                  {order.order_status || "Select Status"} <ChevronDownIcon />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                selectionMode="single"
                selectedKeys={new Set([order.order_status])}
                onSelectionChange={(keys) => {
                  const selectedStatus = Array.from(keys).join("");
                  handleStatusChange(order.order_id, selectedStatus);
                }}
              >
                {statusOptions
                  .filter((status) => status.name !== order.order_status)
                  .map((status) => (
                    <DropdownItem
                      key={status.uid}
                      style={{ backgroundColor: "#f9f0ea", color: "#4d2d18" }}
                    >
                      {status.name}
                    </DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>
          );

        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button isIconOnly radius="full" size="sm" variant="light">
                    <VerticalDotsIcon className="text-default-400" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>

                     <DropdownItem
                                                         className="customHoverColor customActiveColor capitalize"
                                                         onClick={() => trackOrder(order.order_id)}
                                                     >

                    View
                  </DropdownItem>
                  <DropdownItem className="customHoverColor customActiveColor capitalize">
                    Save
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  const topContent = (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-3 items-end">
        <Input
          isClearable
          placeholder="Search by order number..."
          size="sm"
          startContent={<SearchIcon className="text-default-300" />}
          value={filterValue}
          onValueChange={(value) => setFilterValue(value || "")}
        />
      </div>
    </div>
  );

  return (
    <>
      {/* Apply blur effect to content behind the modal */}
      <div className={isDialogOpen ? 'content-blurred' : ''}>
        <Table
          aria-label="Order Details Table"
          topContent={topContent}
          selectionMode="multiple"
          sortDescriptor={sortDescriptor}
          onSortChange={setSortDescriptor}
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <TableHeader columns={headerColumns}>
            {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
          </TableHeader>
          <TableBody items={sortedItems}>
            {(item) => (
              <TableRow key={item.order_id}>
                {(columnKey) => (
                  <TableCell>{renderCell(item, columnKey)}</TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
        <Pagination
          classNames={{ cursor: "bg-main-dark text-background" }}
          style={{ marginTop: "16px" }}
          total={pages}
          page={page}
          onChange={(page) => setPage(page)}
        />
      </div>

      {/* Modal */}
      <Modal
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        className="fixed inset-0 bg-black border flex justify-center items-center w-100 "
      >
        
        <ModalBody className="fixed inset-0 bg-white border border-gray-300 rounded-lg shadow-lg grid justify-center items-start w-full h-auto z-10 p-6 overflow-y-auto">
  <ModalHeader>
    <h2 className="text-xl font-semibold">Order Details</h2>
  </ModalHeader>
  
  {selectedOrder && (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-x-4">
        <p><strong>Order ID:</strong> {selectedOrder.order_id}</p>
        <p><strong>Customer Name:</strong> {selectedOrder.customer_id}</p>
      </div>

      <div className="grid grid-cols-2 gap-x-4">
        <p><strong>Shipping Address:</strong> {selectedOrder.delivery_address}</p>
        <p><strong>Order Date:</strong> {selectedOrder.order_date}</p>
      </div>

      <div className="grid grid-cols-2 gap-x-4">
        <p><strong>Status:</strong> {selectedOrder.order_status}</p>
        <p><strong>Sub Total:</strong> {selectedOrder.sub_total}</p>
      </div>

      <div className="grid grid-cols-2 gap-x-4">
        <p><strong>Discount:</strong> {selectedOrder.discount}</p>
        <p><strong>Delivery Date:</strong> {selectedOrder.delivery_date}</p>
      </div>

      <div className="mt-4">
        <h3 className="text-lg font-medium">Order Items:</h3>
        <div className="space-y-2">
          <p><strong>Item Name:</strong> {selectedOrder.order_item}</p>
          <p><strong>Quantity:</strong> {selectedOrder.quantity}</p>
          <p><strong>Price:</strong> {selectedOrder.price}</p>
          <p><strong>Variant ID:</strong> {selectedOrder.variant_id}</p>
          <p><strong>Color:</strong> {selectedOrder.color}</p>
          <p><strong>Design:</strong> {selectedOrder.design}</p>
          <p><strong>Gender:</strong> {selectedOrder.gender}</p>
          <p><strong>Size:</strong> {selectedOrder.size}</p>
        </div>
      </div>
    </div>
  )}

  <ModalFooter>
    <Button
      color="danger"
      onPress={() => setIsDialogOpen(false)}
      style={{ background: "#4d2d18" }}
    >
      Close
    </Button>
  </ModalFooter>
</ModalBody>
        
      </Modal>
    </>
  );
}
