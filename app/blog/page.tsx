
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// ...existing code...
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import dynamic from "next/dynamic";
import React from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader as SheetHeaderUI,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";



type BlogPost = {
  title: string;
  date: string;
  content: string;
};
async function getMarkdownPosts(): Promise<BlogPost[]> {
  const postsDir = path.join(process.cwd(), "content/blog");
  const files = await fs.readdir(postsDir);
  const posts = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(postsDir, file);
      const source = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(source);
      return {
        title: data.title as string,
        date: data.date as string,
        content: content as string,
      };
    })
  );
  return posts;
}


export default async function BlogPage() {
  const posts = await getMarkdownPosts();
  const MarkdownRenderer = dynamic(() => import("@/components/markdown-renderer"), { ssr: false });
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Blog
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Insights, tutorials, and thoughts on frontend development, React, TypeScript, and building modern web applications. Stay tuned for updates and articles from Navaneeth.
        </p>
      </div>
      <div className="grid gap-6 mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post: BlogPost, idx: number) => (
          <Sheet key={idx}>
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg">{post.title}</CardTitle>
                <span className="text-xs text-muted-foreground mt-1">{new Date(post.date).toLocaleDateString()}</span>
              </CardHeader>
              <div className="flex-1" />
              <div className="px-6 pb-4 flex justify-end">
                <SheetTrigger asChild>
                  <Button>Read More</Button>
                </SheetTrigger>
              </div>
            </Card>
            <SheetContent side="right" className="w-full max-w-full">
              <div className="pl-2 sm:pl-4 w-full">
                <SheetHeaderUI className="mb-2">
                  <SheetTitle>{post.title}</SheetTitle>
                  <SheetDescription>{new Date(post.date).toLocaleDateString()}</SheetDescription>
                </SheetHeaderUI>
                <div className="prose prose-neutral dark:prose-invert mt-4 w-full">
                <MarkdownRenderer 
                  content={post.content} 
                  className="prose prose-neutral dark:prose-invert mt-4 pl-2 sm:pl-4 w-full prose-p:mb-4 prose-p:font-normal prose-p:text-base prose-a:text-amber-400 prose-a:font-semibold prose-a:underline hover:prose-a:text-amber-500 prose-a:transition-colors prose-a:duration-200 prose-a:ease-in-out"
                />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        ))}
      </div>
    </section>
  );
}