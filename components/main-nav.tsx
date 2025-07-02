"use client"
import React, { useState } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Card } from "@/components/ui/card"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-center gap-6 md:gap-10 w-full">
      <Card className="flex items-center justify-between w-auto px-4 py-2">
        <nav className="flex items-center gap-4">
          {items?.length ? (
            items.map((item) => (
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-foreground",
                    pathname === item.href && "font-bold text-primary",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              ) : null
            ))
          ) : (
            <span className="text-sm text-muted-foreground">No links</span>
          )}
        </nav>
      </Card>
    </div>
  )
}


