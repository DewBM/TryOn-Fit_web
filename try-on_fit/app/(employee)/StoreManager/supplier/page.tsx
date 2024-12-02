"use client";
import { useEffect, useState } from "react";
import React from "react";
import Swal from "sweetalert2";
import ViewSup from "./supplier_view/page"
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
  statusOptions,
} from "@/app/components/data-3";
import { capitalize } from "@/app/components/utils";
// import DeleteModal from "@/app/components/DeleteModal";
import { customFetch } from "@/app/utils/auth";
import { redirect } from "next/navigation";
import { FaExclamationTriangle } from "react-icons/fa";
import CreateSup from "./supplier_create/page";
import EditSup from "./supplier_edit/page";




const INITIAL_VISIBLE_COLUMNS = [
  "supplier_name",
  "brand_name",
  "actions",
];

export type SupplierType = {
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
  register_date : String;
};

export default function SupplierTable() {
  const [isSupDialogOpen, setIsSupDialogOpen] = useState(false);
  const openSupDialog = () => setIsSupDialogOpen(true);
  const closeSupDialog = () => setIsSupDialogOpen(false);

  const [supplierViewData, setSupplierViewData] = useState<SupplierType>()
  const [isAddDialogOpen, setIsAddDialogOpen ] = useState(false);
  const openAddDialog = (supplier: SupplierType) => {
    setSupplierViewData(supplier)
    console.log("Open dialog");
    setIsAddDialogOpen(true)}
  const closeAddDialog = () => setIsAddDialogOpen(false);

  const [supplierEditData, setSupplierEditData] = useState<SupplierType>();
  const [isEditDialodOpen, setIsEditDialogOpen] = useState(false);
  const openEditDialog = (supplier : SupplierType) => {
    setSupplierEditData(supplier);
    setIsEditDialogOpen(true);
  }
  
  // const [suppliers, setSuppliers] = useState<Supplier[]>(initialSuppliers);
  const [suppliers, setSuppliers] = useState<SupplierType[]>([]);
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
      let suppliers: SupplierType[] = await customFetch("/supplier", {
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

  // const router = useRouter();
  // const viewSupplier = (supplirData: Supplier) => {
  //   console.log(supplirData)
  //   const serializedObject = encodeURIComponent(JSON.stringify(supplirData));
  //   router.push(`/StoreManager/supplier/supplier_view?supplier_id=${21}`);
  // };


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
    

    return filteredSuppliers;
  }, [suppliers, filterValue, statusFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: SupplierType, b: SupplierType) => {
      const first = a[sortDescriptor.column as keyof SupplierType] as string;
      const second = b[sortDescriptor.column as keyof SupplierType] as string;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);



  const renderCell = React.useCallback(
    (supplier: SupplierType, columnKey: React.Key) => {
      const cellValue = supplier[columnKey as keyof SupplierType];

      const handleDeleteClick = () => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#d33",
          cancelButtonColor: "#3085d6",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            deleteSupplier(supplier.supplier_id);
            // setIsDeleteModalOpen(true);
            Swal.fire("Deleted!", "The supplier has been deleted.", "success").then(() => {
              window.location.reload();
            });
          }
        });
        
      };

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
        case "Brand Name":
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
                      onClick={() =>{openAddDialog(supplier)}}
                      // onClick={openAddDialog}
                      >
                      View
                    </DropdownItem>
                    <DropdownItem 
                    className="customHoverColor customActiveColor"
                    onClick={() =>{openEditDialog(supplier)}}                   
                     >
                      Edit
                    </DropdownItem>
                    <DropdownItem
                      className="customHoverColor customActiveColor"
                      // onClick={() => {setIsDeleteModalOpen(true);deleteSupplier(supplier.supplier_id); }}
                      onClick={handleDeleteClick}
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
    [isAddDialogOpen]
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
              endContent={<PlusIcon width={undefined} height={undefined} />}
              size="sm"
              onClick={openSupDialog}
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
            cursor: "bg-main-dark text-background",
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
      {/* <SupAddForm
          isOpen={isSupDialogOpen}
          onClose={closeSupDialog}
        ></SupAddForm> */}
        <CreateSup
        isOpen={isSupDialogOpen}
        onClose={closeSupDialog}
        >
        </CreateSup>
        
        <EditSup
        isEditSupOpen={isEditDialodOpen}
        onCloseEditSup={closeSupDialog}
        supplierData= {supplierEditData}
        ></EditSup>
      {/* <ViewSup isOpen={isAddDialogOpen} onClose={closeAddDialog}  data={}/> */}
      <ViewSup isOpen={isAddDialogOpen} onClose={closeAddDialog}  supplierData={supplierViewData}/>
    </>
  );
}

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}


const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
        <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 flex items-center justify-center">
          <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10 border border-red-500">
            <FaExclamationTriangle className="text-red-500" />
          </div>
        </div>
        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Are you sure?
          </h3>
        </div>
        <div className="my-2 mx-10">
          <p className="text-sm text-gray-500 text-center">
            This action cannot be undone. All values associated with this field
            will be lost.
          </p>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 text-center">
          <button
            onClick={onClose}
            className=" inline-flex justify-center rounded-md border border-transparent shadow-sm px-8 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Delete field
          </button>
        </div>
        <div className="bg-gray-50 px-4 py-3 sm:px-6 text-center">
          <button
            onClick={onClose}
            className="mt-3 px-12 inline-flex justify-center rounded-md border border-red-500 shadow-sm  py-2 bg-white text-base font-medium text-red-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};