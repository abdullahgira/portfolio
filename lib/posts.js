import fs from "fs"
import path from "path"
import matter from "gray-matter"

import getAllFilesRecursively from "./utils/files"
import markdownToHtml from "./markdown"

const prefixPaths = path.join(process.cwd(), "data/posts")

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, "")
}

export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getPostSlugs() {
  const files = getAllFilesRecursively(prefixPaths)
  const allData = []

  for (const file of files) {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, "/")
    // Remove Unexpected File
    if (path.extname(fileName) !== ".md" && path.extname(fileName) !== ".mdx") {
      return
    }

    const source = fs.readFileSync(file, "utf-8")
    const {data: frontmatter, content} = matter(source)

    if (frontmatter.draft !== true) {
      allData.push({
        ...frontmatter,
        content: await markdownToHtml(content),
        slug: formatSlug(fileName),
        date: frontmatter.date
          ? new Date(frontmatter.date).toISOString()
          : null,
      })
    }
  }

  return allData.sort((a, b) => dateSortDesc(a.date, b.date))
}

export async function getAllPosts() {
  const posts = await getPostSlugs()
  return posts
}
