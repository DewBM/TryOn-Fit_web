"use client";
import React from "react";
import { useEffect, useState } from "react";
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
//import { PlusIcon } from "@/app/components/PlusIcon";
import { customFetch } from "@/app/utils/auth";
import { VerticalDotsIcon } from "@/app/components/VerticalDotsIcon";
import { ChevronDownIcon } from "@/app/components/ChevronDownIcon";
import { SearchIcon } from "@/app/components/SearchIcon";
import { capitalize } from "@/app/components/utils";
import { statusOptions } from "@/app/components/data";


const columns = [
  { uid: "inquiry_id", name: "Inquiry ID", sortable: true },
  { uid: "order_id", name: "Order ID", sortable: true },
  { uid: "product_id", name: "Product ID", sortable: true },
  { uid: "name", name: "Customer Name", sortable: true },
  { uid: "customer_id", name: "Customer ID", sortable: true },
  { uid: "date", name: "Date", sortable: true },
  { uid: "description", name: "Description", sortable: false },
  { uid: "issue_type", name: "Issue Type", sortable: false },
  { uid: "status", name: "Status", sortable: false },

];



const INITIAL_VISIBLE_COLUMNS = [
  "Inquiry ID",
  "Date",
  "Status",
  "Issue Type",
];

export type inquiryType = {
  key: React.Key;
  inquiry_id: string;
  order_id: string;
  product_id: string;
  customer_id: string;
  name : string;
  contact_num: string;
  status: string;
  date : String;
  issue_type:string;
  issue_description:string;
  additional_comments:string;

};



export default function App() {

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );

  const [inquiries, setInquiries] = useState<inquiryType[]>([]);
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "date",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(inquiries.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredInquiries = [...inquiries];

    if (hasSearchFilter) {
      filteredInquiries = filteredInquiries.filter((inquiry_id) =>
        inquiry_id.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredInquiries = filteredInquiries.filter((inquiry_id) =>
        Array.from(statusFilter).includes(inquiry_id.status)
      );
    }

    return filteredInquiries;
  }, [inquiries, filterValue, statusFilter]);

  
  useEffect(() => {
    const getInquiry = async () => {
      let inquiries: inquiryType[] = await customFetch("/inquiryForm", 
        {
        method: "GET",
      });
      if (Array.isArray(inquiries)) {
        inquiries = inquiries.map((e) => {
          
          e.key = e.inquiry_id;
          return e;
        });
        // console.log(suppliers)
        setInquiries(inquiries);
      }
      getInquiry();
      console.log(inquiries);
      // setInquiries(inquiries);
    };
    
    getInquiry();
  }, []);

  

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: inquiryType , b: inquiryType) => {
      const first = a[sortDescriptor.column as keyof inquiryType] as string;
      const second = b[sortDescriptor.column as keyof inquiryType] as string;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback(
    (inquiry: inquiryType, columnKey: React.Key) => {
      const cellValue = inquiry[columnKey as keyof inquiryType];

      switch (columnKey) {
        case "Inquiry ID":
          return (
            <div className="flex flex-col">
              <p
                className="text-bold text-small capitalize main-darker"
              >
                {cellValue}
              </p>
            </div>
          );
        case "Issue Type":
          return (
            <div className="flex flex-col">
              <p
                className="text-bold text-small capitalize main-darker"
              >
                {cellValue}
              </p>
              </ div>
          );
          case "Status":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize main-darker">
                {cellValue}
              </p>
              </ div>
          );

          case "Date":
            return (
              <div className="flex flex-col">
                <p className="text-bold text-small capitalize main-darker">
                  {new Date(cellValue as string | number | Date).toLocaleDateString()} 
                  {cellValue}
                </p>
              </div>
            );
            

       
        case "actions":
          return (
            <div className="relative flex justify-end items-center gap-2">
              <Dropdown className="bg-white border-1 border-default-200">
                <DropdownTrigger>
                  <Button isIconOnly radius="full" size="sm" variant="light">
                    <VerticalDotsIcon className="text-default-400" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem className="customHoverColor customActiveColor"
                  //onClick={() => openRespondDialog(inquiry)}
                  >
                    Respond
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

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search by inquiry..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            {/* <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  className="bg-main-lighter border-[0.5px] border-stroke"
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                className="customSelectedColor"
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown> */}
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  className="bg-main-lighter border-[0.5px] border-stroke"
                  endContent={<ChevronDownIcon className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                className="customSelectedColor"
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem
                    className="customHoverColor customActiveColor capitalize"
                    key={column.uid}
                  >
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {inquiries.length} inquiries
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    inquiries.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-main-dark customHoverColor",
          }}
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="flat"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",

        "group-data-[middle=true]:before:rounded-none",

        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Customer Inquiry Table"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-main-dark after:text-background text-background",
        },
      }}
      classNames={classNames}
      selectedKeys={selectedKeys}
      selectionMode="multiple"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSelectionChange={setSelectedKeys}
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions  " ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No inquiries found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
