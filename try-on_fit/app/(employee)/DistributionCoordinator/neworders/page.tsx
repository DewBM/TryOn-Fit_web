"use client";
import React, { useState, useEffect } from "react";
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
} from "@nextui-org/react";
import { PlusIcon } from "@/app/components/PlusIcon";
import { VerticalDotsIcon } from "@/app/components/VerticalDotsIcon";
import { ChevronDownIcon } from "@/app/components/ChevronDownIcon";
import { SearchIcon } from "@/app/components/SearchIcon";
import { useRouter } from "next/navigation";

// Replace this mock data with API fetching logic
const INITIAL_ORDERS = [
  {
    order_id: 1,
    customer_id: null,
    order_status: "Confirmed",
    order_date: null,
    delivery_date: null,
    delivery_address: null,
    sub_total: null,
    discount: null,
  },
];

const columns = [
  { uid: "order_id", name: "Order ID" },
  { uid: "order_date", name: "Order Date" },
  { uid: "sub_total", name: "Sub Total" },
  { uid: "order_status", name: "Order Status" },
  { uid: "actions", name: "Actions" },
];

const statusOptions = [
  { uid: "processing", name: "Processing" },
  { uid: "shipped", name: "Shipped" },
  { uid: "completed", name: "Completed" },
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

type Order = (typeof INITIAL_ORDERS)[0];

export default function Home() {
  const router = useRouter();
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
  const [ordersData, setOrdersData] = useState<Order[]>(INITIAL_ORDERS);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "http://localhost:8080/order/getOrdersByStatus?status=Confirmed"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        // Ensure data is an array
        if (Array.isArray(data)) {
          setOrdersData(data);
        } else {
          console.error("Expected an array but got:", data);
          setOrdersData([]); // Set to empty array if data is not an array
        }
      } catch (error) {
        console.error("Failed to fetch orders:", error);
        setOrdersData([]); // Set to empty array on error
      }
    };

    fetchOrders();
  }, []);

  const pages = Math.ceil(ordersData.length / rowsPerPage);
  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const handleStatusChange = (orderId: number, newStatus: string) => {
    const updatedOrders = ordersData.map((order) =>
      order.order_id === orderId ? { ...order, order_status: newStatus } : order
    );
    setOrdersData(updatedOrders);
  };

  const filteredItems = React.useMemo(() => {
    let filteredOrders = Array.isArray(ordersData) ? [...ordersData] : [];
    if (hasSearchFilter) {
      filteredOrders = filteredOrders.filter((order) =>
        order.order_id.toString().includes(filterValue.toString())
      );
    }
    return filteredOrders;
  }, [ordersData, filterValue]);

  const items = React.useMemo(() => {
    const start = (page - 1 ) * rowsPerPage;
    const end = start + rowsPerPage;
    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Order, b: Order) => {
      const first = a[sortDescriptor.column as keyof Order] as string;
      const second = b[sortDescriptor.column as keyof Order] as string;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback(
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
                    onClick={() =>
                      router.push(
                        `/DistributionCoordinator/orders/view_neworders?id=${order.order_id}`
                      )
                    }
                  >
                    View
                  </DropdownItem>
                  <DropdownItem
                    className="customHoverColor customActiveColor capitalize"
                  >
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
    [router, ordersData]
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
        classNames={{
          cursor: "bg-main-dark text-background",
        }}
        style={{ marginTop: "16px" }}
        total={pages}
        page={page}
        onChange={(page) => setPage(page)}
      />
    </>
  );
}