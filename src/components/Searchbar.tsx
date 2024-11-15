import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { cn } from "@/lib/utils";

const Searchbar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = useDebouncedCallback((query: string | undefined) => {
    const params = new URLSearchParams(searchParams);

    if (query && query.length > 0) {
      params.set("query", String(query));
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <div
      className={cn(
        "flex items-center relative w-full max-w-[240px]",
        className
      )}
    >
      <Search className="absolute size-4 left-3 text-muted-foreground" />
      <Input
        placeholder="Search"
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-8 shadow-none"
      />
    </div>
  );
};

export default Searchbar;
