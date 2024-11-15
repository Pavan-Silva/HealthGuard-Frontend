"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { ITableMeta } from "@/components/table/DataTable";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import { ColumnDef } from "@tanstack/react-table";
import { Disease } from "@/types/disease";
import Link from "next/link";

export const DiseaseColumns: ColumnDef<Disease>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        className="ml-2 active:bg-app_orange"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),

    cell: ({ row }) => (
      <Checkbox
        className="ml-2"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="pl-0"
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },

  {
    accessorKey: "description",
    header: "Description",
    cell: ({ getValue }) => {
      const value = getValue() as string;
      return <div className="max-w-[400px]">{value}</div>;
    },
  },

  {
    accessorKey: "createdOn",
    header: "Created On",
    cell: ({ getValue }) => {
      const value = getValue() as string;

      return (
        <div className="text-nowrap">
          {new Date(value).toLocaleDateString() +
            " - " +
            new Date(value).toLocaleTimeString()}
        </div>
      );
    },
  },

  {
    accessorKey: "updatedOn",
    header: "Updated On",
    cell: ({ getValue }) => {
      const value = getValue() as string;

      return (
        <div className="text-nowrap">
          {new Date(value).toLocaleDateString() +
            " - " +
            new Date(value).toLocaleTimeString()}
        </div>
      );
    },
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row, table }) => {
      const id = row.original.id;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />

            <DropdownMenuItem asChild>
              <Link
                href={{ pathname: "/users/edit", query: { id: id } }}
                className="cursor-pointer"
              >
                Edit user
              </Link>
            </DropdownMenuItem>

            <DropdownMenuItem
              className="text-destructive cursor-pointer"
              onClick={() =>
                (table.options.meta as ITableMeta).deleteHandler(id.toString())
              }
            >
              Delete User
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
