import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function PaginationBar({ pageCount }: { pageCount: number }) {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  useEffect(() => {
    const page = parseInt(searchParams.get("page") ?? "1");
    const pageSize = parseInt(searchParams.get("pageSize") ?? "20");

    setPageSize(pageSize);
    setCurrentPage(page);
  }, [searchParams]);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", String(page));
    replace(`${pathname}?${params.toString()}`);
  };

  const handlePageSizeChange = (pageSize: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("pageSize", String(pageSize));
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="w-full flex justify-between">
      <div className="flex items-center gap-2">
        <Select
          defaultValue={pageSize.toString()}
          onValueChange={(e) => handlePageSizeChange(parseInt(e))}
        >
          <SelectTrigger className="w-16 shadow-none dark:bg-sidebar">
            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="20" defaultChecked>
              20
            </SelectItem>
            <SelectItem value="40">40</SelectItem>
            <SelectItem value="60">60</SelectItem>
          </SelectContent>
        </Select>

        <p className="text-sm font-semibold">items per page</p>
      </div>

      <div className="flex items-center gap-3 text-muted-foreground">
        <Button
          size="icon"
          variant="ghost"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(1)}
        >
          <ChevronsLeft className="size-4" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          <ChevronLeft className="size-4" />
        </Button>

        <span className="text-sm font-semibold text-primary">
          Page {currentPage} of {pageCount}
        </span>

        <Button
          size="icon"
          variant="ghost"
          disabled={currentPage === pageCount}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          <ChevronRight className="size-4" />
        </Button>

        <Button
          size="icon"
          variant="ghost"
          disabled={currentPage === pageCount}
          onClick={() => handlePageChange(pageCount)}
        >
          <ChevronsRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
