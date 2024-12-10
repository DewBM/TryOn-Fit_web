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
import { useRouter } from "next/navigation";

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
  const [visibleColumns, setVisibleColumns] = useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "order_date",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);
  const [ordersData, setOrdersData] = useState<Order[]>([]);
  const router = useRouter();

  const handleStatusChange = async (orderId: number, newStatus: string) => {
    try {
      const response = await fetch(
        `http://localhost:8080/order/updateStatus/${orderId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: newStatus }),
        }
      );
      const data = await response.json();

      if (data.isSuccess) {
        const updatedOrders = ordersData.map((order) =>
          order.order_id === orderId
            ? { ...order, order_status: newStatus }
            : order
        );
        setOrdersData(updatedOrders);
      } else {
        console.error(data.msg);
      }
    } catch (error) {
      console.error("Error updating status: ", error);
    }
  };

  const handleorderview = (order: Order) => {
    const orderId = order.order_id;
    // Pass the orderId as a query parameter to the next page
    router.push(`/DistributionCoordinator/processingorders/PDF?orderId=${orderId}`);
  };
  

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/order/getOrdersByStatus?status=Processing"
        );
        const data = await response.json();

        if (data.isSuccess) {
          setOrdersData(data.data);
        } else {
          console.error(data.msg);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchOrders();
  }, []);

  const pages = Math.ceil(ordersData.length / rowsPerPage);
  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return ordersData.slice(start, end);
  }, [page, ordersData, rowsPerPage]);

  const renderCell = useCallback((order: Order, columnKey: React.Key) => {
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
              {order.order_status || "Select Status"}
                <ChevronDownIcon className="ml-2" />
              </Button>
            </DropdownTrigger>
            <DropdownMenu>
              {statusOptions.map((status) => (
                <DropdownItem
                  key={status.uid}
                  className="capitalize"
                  onClick={() => handleStatusChange(order.order_id, status.uid)}
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
                  onClick={() => handleorderview(order)}
                >
                  View
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );

      default:
        return cellValue;
    }
  }, [ordersData]);

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
      <div>
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
            {(column) => (
              <TableColumn key={column.uid}>{column.name}</TableColumn>
            )}
          </TableHeader>
          <TableBody items={items}>
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
          total={pages}
          page={page}
          onChange={(page) => setPage(page)}
        />
      </div>
    </>
  );
}
