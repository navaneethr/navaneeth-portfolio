"use client"

import React, { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname()
  return (
    <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-10 w-full">
      <Card className="flex items-center justify-between w-auto px-2 py-2 mx-1 sm:px-4 sm:py-3 sm:mx-2 md:px-6 md:py-3 md:mx-2">
        <nav className="flex items-center gap-2 sm:gap-4 md:gap-6 relative">
          {items?.length ? (
            items.map((item) =>
              item.href ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-xs sm:text-sm font-semibold touch-manipulation",
                    "focus:text-primary focus:outline-none",
                    "relative flex items-center justify-center min-w-0",
                    "hover:text-primary/80",
                    "whitespace-nowrap px-1 sm:px-2",
                    pathname === item.href && "text-primary",
                    pathname !== item.href && "text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                  onTouchStart={() => {}} // Prevent hover state from sticking on mobile
                >
                  {item.title}
                </Link>
              ) : null
            )
          ) : (
            <span className="text-sm text-muted-foreground">No links</span>
          )}
        </nav>
      </Card>
    </div>
  )
}
