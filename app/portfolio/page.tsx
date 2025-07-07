import Link from "next/link"
import { codeSandboxProjects, githubProjects } from "@/data/portfolio"

import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Icons } from "@/components/icons"

export default function PortfolioPage() {
  return (
    <section className="container grid items-center gap-12 pb-8 pt-6 md:py-10">
      {/* Header */}
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Portfolio
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Explore a selection of projects and case studies by Navaneeth,
          showcasing expertise in frontend engineering, React, TypeScript, and
          building modern, scalable web applications.
        </p>
      </div>

      {/* GitHub Projects Section */}
      <div className="w-full space-y-6">
        <div className="flex items-center gap-2">
          <Icons.gitHub className="h-6 w-6" />
          <h2 className="text-2xl font-bold">GitHub Projects</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {githubProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg leading-snug">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex-1"></div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/60 text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                        className: "max-w-[200px]",
                      })}
                    >
                      <Icons.gitHub className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({
                          variant: "default",
                          size: "sm",
                          className: "max-w-[200px]",
                        })}
                      >
                        Live Demo
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CodeSandbox Section */}
      <div className="w-full space-y-6">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 bg-black dark:bg-white rounded-sm flex items-center justify-center">
            <span className="text-white dark:text-black text-xs font-bold">
              CS
            </span>
          </div>
          <h2 className="text-2xl font-bold">CodeSandbox Experiments</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {codeSandboxProjects.map((project) => (
            <Card
              key={project.id}
              className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg leading-snug">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex-1"></div>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-secondary/60 text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={project.sandboxUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                        className: "max-w-[200px]",
                      })}
                    >
                      <div className="h-4 w-4 bg-current rounded-sm mr-2" />
                      Open
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
