"use client";
import { useEffect, useState } from "react";
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
import {
  supplierColumns,
  suppliers as initialSuppliers,
  statusOptions,
} from "@/app/components/data-3";
import { capitalize } from "@/app/components/utils";
import DeleteModal from "@/app/components/DeleteModal";
import { customFetch } from "@/app/utils/auth";
import { redirect, useRouter } from "next/navigation";

const statusColorMap: Record<string, ChipProps["color"]> = {
  available: "success",
  unavailable: "danger",
};

const INITIAL_VISIBLE_COLUMNS = [
  "supplier_name",
  "contact",
  "status",
  "actions",
];

type Supplier = {
  key: React.Key;
  supplier_id: string;
  first_name: string;
  last_name: string;
  brand_name: string;
  email : string
  contact_no: string;
  address: string;
  supplier_name: string;
  status: string;
};

export default function SupplierTable() {
  // const [suppliers, setSuppliers] = useState<Supplier[]>(initialSuppliers);
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "supplier_name",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const deleteSupplier = async (supplierId: string) => {
    console.log(supplierId);
    const x = { "supplier_id": supplierId };
    const params = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(x),
    };
  
    const resp = await customFetch("/supplier", params);
    if (resp) {
      if (resp.isSuccess) {
        redirect("/StoreManager/supplier");
      } else {
        // handle failure
      }
    }
    console.log(supplierId)
  };
  


  useEffect(() => {
    const getSuppliers = async () => {
      let suppliers: Supplier[] = await customFetch("/supplier", {
        method: "GET",
      });
      if (suppliers) {
        suppliers = suppliers.map((e) => {
          e.supplier_name = e.first_name + " " + e.last_name;
          e.key = e.supplier_id;
          return e;
        });
        console.log(suppliers)
        setSuppliers(suppliers);
      }
    };
    getSuppliers();
  }, []);

  const router = useRouter();
  const viewSupplier = () => {
    router.push("/StoreManager/supplier/supplier_view");
  };


  const pages = Math.ceil(suppliers.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return supplierColumns;

    return supplierColumns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredSuppliers = [...suppliers];

    if (hasSearchFilter) {
      filteredSuppliers = filteredSuppliers.filter((supplier) =>
        supplier.supplier_name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredSuppliers = filteredSuppliers.filter((supplier) =>
        Array.from(statusFilter).includes(supplier.status)
      );
    }

    return filteredSuppliers;
  }, [suppliers, filterValue, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Supplier, b: Supplier) => {
      const first = a[sortDescriptor.column as keyof Supplier] as string;
      const second = b[sortDescriptor.column as keyof Supplier] as string;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback(
    (supplier: Supplier, columnKey: React.Key) => {
      const cellValue = supplier[columnKey as keyof Supplier];

      switch (columnKey) {
        case "supplier_name":
          return (
            <div className="flex flex-col">
              <p
                className="text-bold text-small capitalize"
                style={{ color: "var(--main-darker)" }}
              >
                {cellValue}
              </p>
            </div>
          );
        case "contact":
          return (
            <div className="flex flex-col">
              <p
                className="text-bold text-small capitalize"
                style={{ color: "var(--main-darker)" }}
              >
                {cellValue}
              </p>
            </div>
          );
        case "status":
          return (
            <Chip
              className="capitalize border-none gap-1 text-default-600"
              color={statusColorMap[supplier.status]}
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
                    <DropdownItem
                      className="customHoverColor customActiveColor"
                      onClick={viewSupplier}
                    >
                      View
                    </DropdownItem>
                    <DropdownItem className="customHoverColor customActiveColor">
                      Edit
                    </DropdownItem>
                    <DropdownItem
                      className="customHoverColor customActiveColor"
                      onClick={() => deleteSupplier(supplier.supplier_id)}
                    >
                      Delete
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
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
            placeholder="Search by name..."
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
                {supplierColumns.map((column) => (
                  <DropdownItem
                    className="customHoverColor customActiveColor capitalize"
                    key={column.uid}
                  >
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button
              className="bg-main-dark text-white"
              endContent={<PlusIcon />}
              size="sm"
            >
              Add New
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {suppliers.length} suppliers
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
    suppliers.length,
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
    <>
      <Table
        isCompact
        removeWrapper
        aria-label="Example table with custom cells, pagination and sorting"
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
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No suppliers found"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.key}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
      />
    </>
  );
}
