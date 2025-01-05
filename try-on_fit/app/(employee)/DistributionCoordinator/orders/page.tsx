"use client";

import React, { useEffect, useState } from "react";
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
  Chip,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
} from "@nextui-org/react";
import { PlusIcon } from "@/app/components/PlusIcon";
import { VerticalDotsIcon } from "@/app/components/VerticalDotsIcon";
import { ChevronDownIcon } from "@/app/components/ChevronDownIcon";
import { SearchIcon } from "@/app/components/SearchIcon";
import { capitalize } from "@/app/components/utils";
import { useRouter } from "next/navigation";

const columns = [
  { uid: "order_id", name: "Order ID" },
  { uid: "order_date", name: "Order Date" },
  { uid: "sub_total", name: "Subtotal" },
  { uid: "order_status", name: "Status" },
  { uid: "actions", name: "Actions" },
];


type StatusOption = {
  uid: string;
  name: string;
};
const statusOptions = [
  { uid: "Processing", name: "Processing" },
  { uid: "Shipped", name: "Shipped" },
  { uid: "Completed", name: "Completed" },
  { uid: "Confirmed", name: "Confirmed" },
  { uid: "Delivered", name: "Delivered" },
];
const statusColorMap: Record<string, ChipProps["color"]> = {
  processing: "warning",
  shipped: "primary",
  delivered: "success",
  cancelled: "danger",
};

const INITIAL_VISIBLE_COLUMNS = [
  "order_id",
  "order_date",
  "sub_total",
  "order_status",
  "actions",
];

type Order = {
  order_id: number;
  customer_id: number | null;
  order_status: string;
  order_date: string | null;
  delivery_date: string | null;
  delivery_address: string | null;
  sub_total: string | null;
  discount: string | null;
};

export default function Home() {
  const router = useRouter();
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState<string>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [ordersData, setOrdersData] = useState<Order[]>([]);
  
  
  const [page, setPage] = React.useState(1);
  const navigateToViewOrders = () => {
    // Navigate to the desired path
    router.push(`/DistributionCoordinator/orders/view_orders11`);
  };
  // Fetch orders from the API on component mount
  const [orders, setOrders] = useState<Order[]>([]); // State to hold fetched orders
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:8080/order/getAllOrders");
        const data = await response.json();
        console.log(response);
        if (data.isSuccess && data.data.isSuccess) {
          const sortedData = data.data.data.sort((a: Order, b: Order) => a.order_id - b.order_id); // Sort ascending
          setOrders(sortedData); // Set the sorted orders
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };
  
    fetchOrders();
  }, []);

  const pages = Math.ceil(orders.length / rowsPerPage);
  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredOrders = [...orders];
    if (hasSearchFilter) {
      filteredOrders = filteredOrders.filter((order) =>
        order.order_id.toString().includes(filterValue.toLowerCase())
      );
    }
    if (statusFilter !== "all") {
      filteredOrders = filteredOrders.filter((order) => order.order_status.toLowerCase() === statusFilter);
    }
    return filteredOrders;
  }, [orders, filterValue, statusFilter]);

  const items = React.useMemo(() => {
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
  

  const trackOrder = (orderId: number) => {
    router.push(`/DistributionCoordinator/orders/view_orders?order_id=${orderId}`);
  };

  

  const renderCell = React.useCallback(
    (order: Order, columnKey: React.Key) => {
      const cellValue = order[columnKey as keyof Order];
      switch (columnKey) {
        case "status":
          return (
            <Chip
              className="capitalize border-none gap-1 text-default-600"
              color={statusColorMap[order.order_status.toLowerCase()]}
              size="sm"
              variant="dot"
            >
              {capitalize(order.order_status)}
            </Chip>
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

                </DropdownMenu>
              </Dropdown>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [router]
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
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="bg-main-lighter border-[0.5px] border-stroke"
              endContent={<ChevronDownIcon className="text-small" />}
              size="sm"
              variant="flat"
            >
              {statusFilter === "all" ? " Status" : capitalize(statusFilter)}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            selectionMode="single"
            selectedKeys={new Set([statusFilter])}
            onSelectionChange={(keys) => {
              const selected = Array.from(keys).join("");
              setStatusFilter(selected);
            }}
          >
            <DropdownItem key="all">All</DropdownItem>
            {statusOptions.map((status) => (
              <DropdownItem className="customHoverColor customActiveColor capitalize" key={status.uid}>
                {status.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="bg-main-lighter border-[0.5px] border-stroke"
              endContent={<ChevronDownIcon className="text-small" />}
              size="sm"
              variant="flat"
            >
              Columns
            </Button>
          </DropdownTrigger>
          <DropdownMenu selectionMode="multiple" selectedKeys={visibleColumns} onSelectionChange={setVisibleColumns}>
            {columns.map((column) => (
              <DropdownItem className="customHoverColor customActiveColor capitalize" key={column.uid}>
                {column.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
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
        onSortChange={setSortDescriptor} // Update sort state on user interaction
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn key={column.uid}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={sortedItems}>
          {(item: Order) => (
            <TableRow key={item.order_id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Pagination
        aria-label="Pagination"
        total={pages}
        color="primary"
        page={page}
        onChange={(newPage) => setPage(newPage)}
      />

    </>
  );
}
