"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, useAnimationControls } from "framer-motion"

import { buttonVariants } from "@/components/ui/button"

interface TickerItem {
  text: string
  link: string
}

interface TickerProps {
  items?: TickerItem[]
  className?: string
}

export function Ticker({ items = [], className = "" }: TickerProps) {
  const controls = useAnimationControls()
  const [isHovered, setIsHovered] = useState(false)

  // Default items if none provided
  const defaultItems: TickerItem[] = [
    {
      text: "Convert Snake to Camel Case - JavaScript Interview Question",
      link: "/blog/convert-snake-to-camel",
    },
    {
      text: "You're Probably Better at Counter-Strike Than Your Friends",
      link: "/blog/counter-strike-refresh-rate",
    },
    {
      text: "The New York Story - A Personal Journey",
      link: "/blog/the-new-york-story",
    },
    {
      text: "FireCracker App - Interactive React Application",
      link: "/portfolio",
    },
    {
      text: "Portfolio Showcase - Featured Projects",
      link: "/portfolio",
    },
    {
      text: "Contact Me - Let's Build Something Amazing",
      link: "/contact",
    },
  ]

  const tickerItems = items.length > 0 ? items : defaultItems

  useEffect(() => {
    // Start the animation when component mounts
    controls.start({
      x: ["0%", "-100%"],
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      },
    })
  }, [controls])

  const handleMouseEnter = () => {
    setIsHovered(true)
    controls.stop()
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    // Resume animation from current position
    controls.start({
      x: [null, "-100%"], // null means continue from current position
      transition: {
        duration: 30,
        repeat: Infinity,
        ease: "linear",
      },
    })
  }

  return (
    <section
      className={`fixed top-0 left-0 right-0 z-50 w-full overflow-hidden bg-muted/50 backdrop-blur-sm border-b shadow-sm ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative py-1 sm:py-1.5">
        <motion.div
          className="flex whitespace-nowrap"
          animate={controls}
          initial={{ x: "0%" }}
        >
          {/* First set */}
          {tickerItems.map((item, index) => (
            <Link
              key={`set1-${index}`}
              href={item.link}
              onMouseEnter={() => controls.stop()}
              onMouseLeave={() =>
                controls.start({
                  x: [null, "-100%"],
                  transition: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                })
              }
              className={`${buttonVariants({
                variant: "secondary",
                size: "sm",
              })} mx-1 px-2 py-1 text-xs h-auto min-h-0 whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors`}
            >
              {item.text}
            </Link>
          ))}
          {/* Second set for seamless loop */}
          {tickerItems.map((item, index) => (
            <Link
              key={`set2-${index}`}
              href={item.link}
              onMouseEnter={() => controls.stop()}
              onMouseLeave={() =>
                controls.start({
                  x: [null, "-100%"],
                  transition: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                })
              }
              className={`${buttonVariants({
                variant: "secondary",
                size: "sm",
              })} mx-1 px-2 py-1 text-xs h-auto min-h-0 whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors`}
            >
              {item.text}
            </Link>
          ))}
          {/* Third set for extra smoothness */}
          {tickerItems.map((item, index) => (
            <Link
              key={`set3-${index}`}
              href={item.link}
              onMouseEnter={() => controls.stop()}
              onMouseLeave={() =>
                controls.start({
                  x: [null, "-100%"],
                  transition: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  },
                })
              }
              className={`${buttonVariants({
                variant: "secondary",
                size: "sm",
              })} mx-1 px-2 py-1 text-xs h-auto min-h-0 whitespace-nowrap hover:bg-primary hover:text-primary-foreground transition-colors`}
            >
              {item.text}
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
