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

function mapImagesToPublicSlug(content, slug) {
  const re = /<img\s*src="([\w\W]+?)"/gm
  let match
  while ((match = re.exec(content)) !== null) {
    content = content.replace(match[1], `/blog/${slug}/${match[1]}`)
  }
  return content
}

export async function getPostBySlug(slug) {
  const mdxPath = path.join(prefixPaths, `${slug}.mdx`)
  const mdPath = path.join(prefixPaths, `${slug}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, "utf8")
    : fs.readFileSync(mdPath, "utf8")

  const {data: frontmatter, content: rawContent} = matter(source)

  const converted = await markdownToHtml(rawContent)
  const content = mapImagesToPublicSlug(converted, slug)

  if (frontmatter.draft !== true) {
    return {
      ...frontmatter,
      content,
      slug,
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
    }
  }
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
    const {data: frontmatter, content: rawContent} = matter(source)

    const slug = formatSlug(fileName)

    if (frontmatter.draft !== true) {
      allData.push({
        ...frontmatter,
        slug,
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
