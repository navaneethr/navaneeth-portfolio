import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

import { getAllPostIds, getPostData } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import MarkdownRenderer from "@/components/markdown-renderer"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPostIds()
  return posts.map(({ params }) => ({
    id: params.id,
  }))
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostData(params.id)

  // Calculate reading time (rough estimate: 200 words per minute)
  const wordCount = post.content.split(/\s+/).length
  const readingTime = Math.ceil(wordCount / 200)

  return (
    <article className="container max-w-4xl mx-auto py-8 px-4">
      {/* Back to Blog Button */}
      <Link
        href="/blog"
        className={buttonVariants({
          variant: "ghost",
          size: "sm",
          className: "mb-8 -ml-2",
        })}
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blog
      </Link>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight mb-4 lg:text-5xl">
          {post.title}
        </h1>

        <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
          {post.description}
        </p>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{readingTime} min read</span>
          </div>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <MarkdownRenderer content={post.content} />
      </div>

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t">
        <div className="flex justify-between items-center">
          <Link
            href="/blog"
            className={buttonVariants({
              variant: "outline",
              size: "sm",
            })}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            All Posts
          </Link>

          <div className="text-sm text-muted-foreground">
            Published on{" "}
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </div>
        </div>
      </footer>
    </article>
  )
}
