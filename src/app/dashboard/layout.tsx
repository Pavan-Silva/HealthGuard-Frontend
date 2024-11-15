"use client";

import { SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  const user = {
    id: "1",
    firstName: "Pavan",
    lastName: "Silva",
    email: "pavan@gmail.com",
    roles: ["Admin"],
    disabled: false,
    phoneNumber: "1234567890",
    profileImageUrl: "",
    createdOn: "",
    updatedOn: "",
  };

  return (
    <>
      <AppSidebar user={user} />

      <SidebarInset>
        <Header />
        <main className="flex flex-1 flex-col overflow-y-auto p-4 pt-2">
          {children}
        </main>
      </SidebarInset>
    </>
  );
}
