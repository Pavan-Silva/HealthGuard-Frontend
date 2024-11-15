"use client";

import { PaginationBar } from "@/components/table/PaginationBar";
import { DataTable } from "@/components/table/DataTable";
import Searchbar from "@/components/Searchbar";
import { Button } from "@/components/ui/button";
import { Dna, FilePlus } from "lucide-react";

import { DiseaseColumns } from "@/app/dashboard/diseases/columns";
import { useGetDiseasesQuery } from "@/redux/services/diseaseApi";
import Link from "next/link";

export default function Diseases() {
  const { data } = useGetDiseasesQuery();

  return (
    <div className="space-y-4 border rounded-lg p-2">
      <div className="flex items-center gap-6 pt-2 px-1.5">
        <div className="flex items-center gap-2">
          <div className="flex aspect-square size-8 items-center justify-center rounded-md border text-primary/50 bg-primary-foreground/50">
            <Dna className="size-5" />
          </div>

          <h2 className="text-xl font-semibold tracking-tight">
            Diseases (30)
          </h2>
        </div>

        <Searchbar />

        <Link href="/dashboard/diseases/create" className="ml-auto">
          <Button className="shadow-none">
            <FilePlus className="size-5" />
            Add Record
          </Button>
        </Link>
      </div>

      <DataTable
        columns={DiseaseColumns}
        paginatedList={data}
        deleteHandler={(id) => console.log(id)}
      />

      <PaginationBar pageCount={data?.totalPages || 1} />
    </div>
  );
}
