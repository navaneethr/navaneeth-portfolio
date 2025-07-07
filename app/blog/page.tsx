import Link from "next/link"
import { Calendar, Clock } from "lucide-react"

import { getAllPosts } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <section className="container grid items-center gap-6 pb-8 md:py-10">
      <div className="grid gap-6 mt-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          // Calculate reading time (rough estimate: 200 words per minute)
          const wordCount = post.content.split(/\s+/).length
          const readingTime = Math.ceil(wordCount / 200)

          return (
            <Card
              key={post.id}
              className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-lg leading-snug line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {post.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex-1"></div>

                <div className="space-y-3">
                  {/* Tags */}
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  )}

                  {/* Button and Meta Information Row */}
                  <div className="flex items-center justify-between gap-4">
                    <Link href={`/blog/${post.id}`}>
                      <Button
                        variant="default"
                        size="sm"
                        className="max-w-[150px]"
                      >
                        Read
                      </Button>
                    </Link>

                    {/* Meta Information */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{readingTime} min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
