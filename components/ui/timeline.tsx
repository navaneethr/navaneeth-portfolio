import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface TimelineItem {
  id: string
  date: string
  title: string
  description: string
  location?: string
  companyUrl?: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={cn("relative max-w-4xl mx-auto", className)}>
      {/* Timeline line */}
      <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-border md:transform md:-translate-x-1/2" />

      <div className="space-y-8">
        {items.map((item, index) => {
          const isEven = index % 2 === 0
          return (
            <div key={item.id} className="relative flex items-center">
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-background border-2 border-primary transform -translate-x-1/2 md:transform md:-translate-x-1/2">
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              {/* Timeline content */}
              <div className="flex w-full">
                {/* Mobile: Always left-aligned */}
                <div className="md:hidden flex w-full pl-12">
                  <Card className="max-w-md w-full">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <span className="text-sm text-muted-foreground font-mono">
                        {item.date}
                      </span>
                      {item.location && (
                        <CardDescription className="text-sm text-muted-foreground">
                          {item.companyUrl ? (
                            <Link
                              href={item.companyUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 hover:underline transition-colors"
                            >
                              {item.location}
                            </Link>
                          ) : (
                            item.location
                          )}
                        </CardDescription>
                      )}
                    </CardHeader>
                    {item.description && (
                      <CardContent className="pt-0">
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    )}
                  </Card>
                </div>

                {/* Desktop: Alternating layout */}
                <div className="hidden md:flex w-full">
                  {isEven ? (
                    <>
                      <div className="flex w-1/2 justify-end pr-6">
                        <Card className="max-w-md w-full">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg">
                              {item.title}
                            </CardTitle>
                            <span className="text-sm text-muted-foreground font-mono">
                              {item.date}
                            </span>
                            {item.location && (
                              <CardDescription className="text-sm text-muted-foreground">
                                {item.companyUrl ? (
                                  <Link
                                    href={item.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 hover:underline transition-colors"
                                  >
                                    {item.location}
                                  </Link>
                                ) : (
                                  item.location
                                )}
                              </CardDescription>
                            )}
                          </CardHeader>
                          {item.description && (
                            <CardContent className="pt-0">
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </CardContent>
                          )}
                        </Card>
                      </div>
                      <div className="w-1/2"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2"></div>
                      <div className="flex w-1/2 justify-start pl-6">
                        <Card className="max-w-md w-full">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-lg">
                              {item.title}
                            </CardTitle>
                            <span className="text-sm text-muted-foreground font-mono">
                              {item.date}
                            </span>
                            {item.location && (
                              <CardDescription className="text-sm text-muted-foreground">
                                {item.companyUrl ? (
                                  <Link
                                    href={item.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary/80 hover:underline transition-colors"
                                  >
                                    {item.location}
                                  </Link>
                                ) : (
                                  item.location
                                )}
                              </CardDescription>
                            )}
                          </CardHeader>
                          {item.description && (
                            <CardContent className="pt-0">
                              <p className="text-sm text-muted-foreground">
                                {item.description}
                              </p>
                            </CardContent>
                          )}
                        </Card>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
