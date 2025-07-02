"use client"
import Link from "next/link"
import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { useEffect, useRef, useState } from "react"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"
export function SiteHeader() {
  const [show, setShow] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const SCROLL_THRESHOLD = 64 // px, adjust as needed for your header height
    const handleScroll = () => {
      if (typeof window === "undefined") return
      const currentScrollY = window.scrollY
      if (currentScrollY < SCROLL_THRESHOLD) {
        setShow(true)
      } else if (currentScrollY > lastScrollY.current) {
        setShow(false)
      } else {
        setShow(true)
      }
      lastScrollY.current = currentScrollY
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`bg-background sticky top-0 z-40 w-full transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="container flex flex-col sm:flex-row h-auto sm:h-16 items-center sm:justify-between py-2 sm:py-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center">
          <nav
            className="flex w-full sm:w-auto flex-col sm:flex-row items-center justify-center sm:justify-end space-y-2 sm:space-y-0 sm:space-x-1 pt-2 sm:pt-0 pr-0 sm:pr-4 md:pr-8 lg:pr-12"
          >
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

