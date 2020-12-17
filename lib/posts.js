import fs from "fs"
import {join} from "path"
import matter from "gray-matter"

const postsDirectory = join(process.cwd(), "_posts")

export function getPostSlugs() {
  // let slugs = []
  // const dirContent = fs.readdirSync(postsDirectory)
  // dirContent.forEach(file => {
  //   let fileStat = fs.statSync(join(postsDirectory, file))
  //   if (fileStat.isDirectory()) slugs.push(file)
  // })
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "")
  // const fullPath = join(postsDirectory, slug, `index.md`)
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const {data, content} = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })
  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"))
  return posts
}
