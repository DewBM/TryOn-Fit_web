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

// Data
const returns = [
  {
    id: 1,
    returnNumber: "12345",
    customerName: "Nimal",
    status: "received",
    total: "1200.00",
    date: "2023-07-15",
  },
  {
    id: 2,
    returnNumber: "12346",
    customerName: "kamal",
    status: "processing",
    total: "8500.00",
    date: "2023-07-12",
  },
  {
    id: 3,
    returnNumber: "12347",
    customerName: "sunil",
    status: "completed",
    total: "5000.00",
    date: "2023-07-10",
  },
];

const columns = [
  { uid: "returnNumber", name: "Return Number" },
  { uid: "customerName", name: "Customer Name" },
  { uid: "status", name: "Status" },
  { uid: "total", name: "Total" },
  { uid: "date", name: "Date" },
  { uid: "actions", name: "Actions" },
];

const statusOptions = [
  { uid: "received", name: "Received" },
  { uid: "processing", name: "Processing" },
  { uid: "completed", name: "Completed" },
  { uid: "cancelled", name: "Cancelled" },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  received: "primary",
  processing: "warning",
  completed: "success",
  cancelled: "danger",
};

const INITIAL_VISIBLE_COLUMNS = ["returnNumber", "status", "date", "actions"];

type Return = (typeof returns)[0];

export default function ReturnOverview() {
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set([])
  );
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "date",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(returns.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredReturns = [...returns];

    if (hasSearchFilter) {
      filteredReturns = filteredReturns.filter((ret) =>
        ret.returnNumber.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredReturns = filteredReturns.filter((ret) =>
        Array.from(statusFilter).includes(ret.status)
      );
    }

    return filteredReturns;
  }, [returns, filterValue, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Return, b: Return) => {
      const first = a[sortDescriptor.column as keyof Return] as string;
      const second = b[sortDescriptor.column as keyof Return] as string;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((ret: Return, columnKey: React.Key) => {
    const cellValue = ret[columnKey as keyof Return];

    switch (columnKey) {
      case "status":
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[ret.status]}
            size="sm"
            variant="dot"
          >
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <div style={{ position: "relative", zIndex: 1 }}>
              <Dropdown className="bg-white border-1 border-default-200">
                <DropdownTrigger>
                  <Button isIconOnly radius="full" size="sm" variant="light">
                    <VerticalDotsIcon className="text-default-400" />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu>
                  <DropdownItem className="customHoverColor customActiveColor">
                    View
                  </DropdownItem>
                  <DropdownItem className="customHoverColor customActiveColor">
                    Edit
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

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
            placeholder="Search by return number..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
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
                  <DropdownItem
                    className="customHoverColor customActiveColor capitalize"
                    key={status.uid}
                  >
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
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
            Total {returns.length} returns
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="custom-select p-1"
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
    returns.length,
    hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-main-dark text-background",
          }}
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
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
      aria-label="Return Overview Table with custom cells, pagination and sorting"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      checkboxesProps={{
        classNames: {
          wrapper: "after:bg-dark-main after:text-background text-background",
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
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No Returns found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
