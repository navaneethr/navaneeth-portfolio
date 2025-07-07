import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  id: string
  title: string
  description: string
  date: string
  tags: string[]
  content: string
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map((fileName) => ({
    params: {
      id: fileName.replace(/\.md$/, ""),
    },
  }))
}

export function getPostData(id: string): BlogPost {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")

  const { data, content } = matter(fileContents)

  return {
    id,
    title: data.title,
    description: data.description,
    date: data.date,
    tags: data.tags || [],
    content,
  }
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "")
    return getPostData(id)
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}
