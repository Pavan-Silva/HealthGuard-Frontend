"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

import { usePathname } from "next/navigation";
import { Fragment } from "react";

export default function Header() {
  const path = usePathname().split("/");

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />

        <Breadcrumb>
          <BreadcrumbList>
            {path.map((item, index) =>
              index !== path.length - 1 ? (
                <Fragment key={index}>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink className="capitalize" href={`/${item}`}>
                      {item == "" ? "Home" : item}
                    </BreadcrumbLink>
                  </BreadcrumbItem>

                  <BreadcrumbSeparator />
                </Fragment>
              ) : (
                <BreadcrumbItem key={index}>
                  <BreadcrumbPage className="capitalize">{item}</BreadcrumbPage>
                </BreadcrumbItem>
              )
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="px-4 ml-auto">
        <ThemeToggle />
      </div>
    </header>
  );
}
