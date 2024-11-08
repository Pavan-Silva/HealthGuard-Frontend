import { ThemeToggle } from "@/components/layout/theme-toggle";
import Link from "next/link";

function page() {
  return (
    <>
      <ThemeToggle />
      <Link href="/dashboard">Dashboard</Link>
    </>
  );
}

export default page;
