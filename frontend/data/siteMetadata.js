const siteMetadata = {
  title: "Portfolio",
  author: "Abdullah Gira",
  headerTitle: "Blog",
  description: "Abdullah Gira's portfolio",
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL,
  siteLogo: "/static/images/logo.png",
  image: "/portfolio/me.png",
  socialBanner: "/portfolio/blog-social-banner.png",
  email: "abdullaho.gira@gmail.com",
  github: "https://github.com/abdullahgira",
  twitter: "https://twitter.com/abdullah_gira",
  linkedin: "https://www.linkedin.com/in/abdullahgira",
  language: "en-us",
  locale: "en-US",
  pubDate: "2022-12-20",
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID, // e.g. UA-000000-2 or G-XXXXXXX
  },
}

module.exports = siteMetadata
