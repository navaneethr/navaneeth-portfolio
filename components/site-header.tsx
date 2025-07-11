"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  // Translucent effect on scroll
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`bg-background sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled ? "backdrop-blur bg-background/80 shadow-md" : ""
      }`}
    >
      <div className="container flex flex-col sm:flex-row h-auto sm:h-16 items-center sm:justify-center py-2 sm:py-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center sm:absolute sm:right-4 md:right-8 lg:right-12">
          <nav className="flex w-full sm:w-auto flex-col sm:flex-row items-center justify-center sm:justify-end space-y-2 sm:space-y-0 sm:space-x-1 pt-2 sm:pt-0 pr-0 sm:pr-4 md:pr-8 lg:pr-12">
            <div className="flex w-full justify-center sm:w-auto sm:justify-end">
              <Link
                href="https://www.linkedin.com/in/navaneethkr/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </div>
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "icon",
                    variant: "ghost",
                  })}
                >
                  <Icons.gitHub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <ThemeToggle />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
