const RSS = require("rss")
const fs = require("fs")
const matter = require("gray-matter")

const siteMetadata = require("../data/siteMetadata")
const path = require("path")
const prefixPaths = "data/blog"

function getAllPosts() {
  const files = fs.readdirSync(prefixPaths)
  const allData = []

  for (const fileName of files) {
    // Replace is needed to work on Windows
    // Remove Unexpected File
    if (path.extname(fileName) !== ".md" && path.extname(fileName) !== ".mdx") {
      return
    }

    const source = fs.readFileSync(path.join(prefixPaths, fileName), "utf-8")
    const {data: frontmatter, content: rawContent} = matter(source)

    const slug = fileName.replace(/\.(mdx|md)/, "")

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

  return allData.sort((a, b) => {
    if (a > b) return -1
    if (a < b) return 1
    return 0
  })
}

;(async () => {
  const feedOptions = {
    title: "Blog posts | RSS Feed",
    site_url: siteMetadata.siteUrl + "/blog",
    feed_url: `${siteMetadata.siteUrl}/rss.xml`,
    image_url: `${siteMetadata.siteUrl}${siteMetadata.socialBanner}`,
    pubDate: siteMetadata.pubDate,
    copyright: `All rights reserved ${new Date().getFullYear()}, Abdullah Gira`,
  }

  const feed = new RSS(feedOptions)
  const allPosts = getAllPosts()
  allPosts.map((post) =>
    feed.item({
      title: post.title,
      url: `${siteMetadata.siteUrl}/blog/${post.slug}`,
      date: post.date,
    })
  )

  // eslint-disable-next-line no-sync
  fs.writeFileSync("public/rss.xml", feed.xml({indent: true}))
})()
