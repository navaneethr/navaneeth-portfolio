"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Code, ExternalLink, Heart, Table, TrendingUp } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  liveUrl: string
  githubUrl: string
  icon: React.ReactNode
  color: string
}

const featuredProjects: Project[] = [
  {
    id: "serenote-client",
    title: "Serenote UI",
    description: "AI-first mental health app with analytics",
    liveUrl: "https://serenote-client.vercel.app/login",
    githubUrl: "https://github.com/navaneethr/serenote-client",
    icon: <Heart className="h-4 w-4" />,
    color: "text-blue-500",
  },
  {
    id: "serenote-server",
    title: "Serenote Server",
    description: "AI-first mental health app with analytics",
    liveUrl: "https://serenote-client.vercel.app/login",
    githubUrl: "https://github.com/navaneethr/serenote-server",
    icon: <Heart className="h-4 w-4" />,
    color: "text-blue-500",
  },
  {
    id: "firecracker-gpt",
    title: "Firecracker GPT",
    description: "GenAI application with open-ended conversations",
    liveUrl: "https://firecracker-gpt.vercel.app/",
    githubUrl: "https://github.com/navaneethr/firecracker",
    icon: <Code className="h-4 w-4" />,
    color: "text-green-500",
  },
  {
    id: "row-column-virtualization",
    title: "Virtualized Table",
    description: "High-performance table with infinite scroll",
    liveUrl: "https://row-column-virtualization-infinite.vercel.app/",
    githubUrl:
      "https://github.com/navaneethr/row-column-virtualization-infinite-scroll",
    icon: <Table className="h-4 w-4" />,
    color: "text-purple-500",
  },
]

export function Ticker() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 text-white transition-transform duration-300 w-screen ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-2 text-sm w-full">
        {/* Left side - Label */}
        <div className="flex items-center space-x-2 font-semibold flex-shrink-0">
          <TrendingUp className="h-4 w-4 animate-pulse" />
          <span className="hidden sm:inline">Latest Projects</span>
        </div>

        {/* Center - Scrolling projects */}
        <div className="flex-1 mx-8 overflow-hidden min-w-0">
          <div className="flex animate-scroll space-x-16 relative w-full min-w-full">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-center space-x-3 whitespace-nowrap flex-shrink-0 min-w-max"
              >
                <div className={project.color}>{project.icon}</div>
                <span className="font-medium">{project.title}</span>
                <span className="text-white/80 text-xs max-w-[200px] truncate">
                  {project.description}
                </span>
                <div className="flex items-center space-x-2">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300 transition-colors"
                    title={`View ${project.title} live`}
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300 transition-colors"
                    title={`View ${project.title} source code`}
                  >
                    <Code className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
            {/* Large gap between sets */}
            <div className="w-48 sm:w-96 flex-shrink-0"></div>
            {featuredProjects.map((project) => (
              <div
                key={`${project.id}-duplicate`}
                className="flex items-center space-x-3 whitespace-nowrap flex-shrink-0 min-w-max"
              >
                <div className={project.color}>{project.icon}</div>
                <span className="font-medium">{project.title}</span>
                <span className="text-white/80 text-xs max-w-[200px] truncate">
                  {project.description}
                </span>
                <div className="flex items-center space-x-2">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300 transition-colors"
                    title={`View ${project.title} live`}
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300 transition-colors"
                    title={`View ${project.title} source code`}
                  >
                    <Code className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
            {/* Large gap between sets */}
            <div className="w-48 sm:w-96 flex-shrink-0"></div>
            {featuredProjects.map((project) => (
              <div
                key={`${project.id}-triplicate`}
                className="flex items-center space-x-3 whitespace-nowrap flex-shrink-0 min-w-max"
              >
                <div className={project.color}>{project.icon}</div>
                <span className="font-medium">{project.title}</span>
                <span className="text-white/80 text-xs max-w-[200px] truncate">
                  {project.description}
                </span>
                <div className="flex items-center space-x-2">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300 transition-colors"
                    title={`View ${project.title} live`}
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300 transition-colors"
                    title={`View ${project.title} source code`}
                  >
                    <Code className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
            {/* Large gap between sets */}
            <div className="w-48 sm:w-96 flex-shrink-0"></div>
            {featuredProjects.map((project) => (
              <div
                key={`${project.id}-quadruplicate`}
                className="flex items-center space-x-3 whitespace-nowrap flex-shrink-0 min-w-max"
              >
                <div className={project.color}>{project.icon}</div>
                <span className="font-medium">{project.title}</span>
                <span className="text-white/80 text-xs max-w-[200px] truncate">
                  {project.description}
                </span>
                <div className="flex items-center space-x-2">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300 transition-colors"
                    title={`View ${project.title} live`}
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300 transition-colors"
                    title={`View ${project.title} source code`}
                  >
                    <Code className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Status */}
        <div className="flex items-center space-x-2 text-xs flex-shrink-0 m-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
