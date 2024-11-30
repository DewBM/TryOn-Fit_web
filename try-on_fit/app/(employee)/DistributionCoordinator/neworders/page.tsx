"use client";

import React from "react";
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

const orders = [
    {
        "id": 1,
        "orderNumber": "ORD12345",
        "customerName": "John Doe",
        "customerEmail": "johndoe@example.com",
        "total": 120.00,
        "date": "2023-07-15",
        "items": [
          {
            "itemId": 101,
            "name": "Red T-shirt",
            "quantity": 2,
            "pricePerUnit": 50.00,
            "totalPrice": 100.00
          },
          {
            "itemId": 102,
            "name": "FDRock",
            "quantity": 1,
            "pricePerUnit": 20.00,
            "totalPrice": 20.00
          }
        ],
        "shippingAddress": {
          "name": "John Perera",
          "addressLine1": "123 Main Street",
          "addressLine2": "Papiliyana",
          "city": "Nugegoda",
          "postalCode": "10001",
          "country": "USA",
          "phone": "+94-70-456-7890"
        },
        "billingAddress": {
            "name": "John Perera",
            "addressLine1": "123 Main Street",
            "addressLine2": "Papiliyana",
            "city": "Nugegoda",
            "postalCode": "10001",
            "country": "USA",
            "phone": "+94-70-456-7890"
          },
        "paymentDetails": {
          "paymentMethod": "Credit Card",
           "cardLastFourDigits": "1234",
          "transactionId": "TXN67890",
          "paymentDate": "2023-07-15"
        },
        "shippingDetails": {
          "shippingMethod": "speed Shipping",
          "shippingCost": 450.00
        }
      }
      
];

const columns = [
  { uid: "orderNumber", name: "Order Number" },
  { uid: "customerName", name: "Customer Name" },
  { uid: "total", name: "Total" },
  { uid: "date", name: "Date" },
  { uid: "actions", name: "Actions" },
];



const INITIAL_VISIBLE_COLUMNS = ["orderNumber", "customerName", "total", "date", "actions"];

type Order = (typeof orders)[0];

export default function Home() {
    const router = useRouter();
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = React.useState<string>("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
      column: "date",
      direction: "ascending",
    });
    const [page, setPage] = React.useState(1);
  
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
          order.orderNumber.toLowerCase().includes(filterValue.toLowerCase())
        );
      }
  
    //   if (statusFilter !== "all") {
    //     filteredOrders = filteredOrders.filter((order) => order.status === statusFilter);
    //   }
  
      return filteredOrders;
    }, [orders, filterValue, statusFilter]);
  
    const items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
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
          // case "status":
          //   return (
          //     <Chip
          //       className="capitalize border-none gap-1 text-default-600"
          //       color={statusColorMap[order.status]}
          //       size="sm"
          //       variant="dot"
          //     >
          //       {cellValue}
          //     </Chip>
          //   );
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
                    <DropdownItem className="customHoverColor customActiveColor capitalize" onClick={() => router.push(`/DistributionCoordinator/orders/view_neworders?id=${order.id}`)}>
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
          {/* <Dropdown>
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
                <DropdownItem className="customHoverColor customActiveColor capitalize" key={status.uid}>{status.name}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown> */}
          <Dropdown>
            <DropdownTrigger>
            <Button
                    className="bg-main-lighter border-[0.5px] border-stroke"
                    endContent={<ChevronDownIcon className="text-small" />}
                    size="sm"
                    variant="flat"
                  >Columns</Button>
            </DropdownTrigger>
            <DropdownMenu
              selectionMode="multiple"
              selectedKeys={visibleColumns}
              onSelectionChange={setVisibleColumns}
            >
              {columns.map((column) => (
                <DropdownItem
                className="customHoverColor customActiveColor capitalize"
                key={column.uid}
              >{column.name}</DropdownItem>
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
          onSortChange={setSortDescriptor}
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
        >
          <TableHeader columns={headerColumns}>
            {(column) => <TableColumn key={column.uid}>{column.name}</TableColumn>}
          </TableHeader>
          <TableBody items={sortedItems}>
            {(item) => (
              <TableRow key={item.id}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
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


  