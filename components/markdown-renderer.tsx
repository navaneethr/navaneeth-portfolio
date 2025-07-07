"use client"

import React from "react"
import ReactMarkdown from "react-markdown"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

interface MarkdownRendererProps {
  content: string
  className?: string
}

const markdownComponents = {
  h1: ({ children, ...props }: any) => (
    <h1
      className="text-4xl font-bold tracking-tight mb-6 mt-8 first:mt-0"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2
      className="text-3xl font-semibold tracking-tight mb-4 mt-8 first:mt-0"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3
      className="text-2xl font-semibold tracking-tight mb-3 mt-6 first:mt-0"
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: any) => (
    <h4
      className="text-xl font-semibold tracking-tight mb-2 mt-4 first:mt-0"
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: any) => (
    <h5
      className="text-lg font-semibold tracking-tight mb-2 mt-4 first:mt-0"
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: any) => (
    <h6
      className="text-base font-semibold tracking-tight mb-2 mt-4 first:mt-0"
      {...props}
    >
      {children}
    </h6>
  ),
  p: ({ children, ...props }: any) => (
    <p className="mb-4 leading-7 text-muted-foreground" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: any) => (
    <ul className="mb-4 ml-6 list-disc [&>li]:mt-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol className="mb-4 ml-6 list-decimal [&>li]:mt-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li className="text-muted-foreground" {...props}>
      {children}
    </li>
  ),
  blockquote: ({ children, ...props }: any) => (
    <blockquote
      className="border-l-4 border-primary/20 pl-6 italic my-6 text-muted-foreground"
      {...props}
    >
      {children}
    </blockquote>
  ),
  code({ node, inline, className, children, ...props }: any) {
    const match = /language-(\w+)/.exec(className || "")
    return !inline && match ? (
      <SyntaxHighlighter
        style={vscDarkPlus}
        language={match[1]}
        PreTag="div"
        className="rounded-lg mb-4"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className="bg-muted px-2 py-1 rounded text-sm font-mono" {...props}>
        {children}
      </code>
    )
  },
  pre: ({ children, ...props }: any) => (
    <pre className="overflow-x-auto" {...props}>
      {children}
    </pre>
  ),
  a: ({ children, href, ...props }: any) => (
    <a
      className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
      href={href}
      {...props}
    >
      {children}
    </a>
  ),
  strong: ({ children, ...props }: any) => (
    <strong className="font-semibold text-foreground" {...props}>
      {children}
    </strong>
  ),
  em: ({ children, ...props }: any) => (
    <em className="italic" {...props}>
      {children}
    </em>
  ),
}

export default function MarkdownRenderer({
  content,
  className,
}: MarkdownRendererProps) {
  return (
    <div className={className}>
      <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
    </div>
  )
}
