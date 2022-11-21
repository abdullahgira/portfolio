import Head from "next/head"
import Link from "next/link"

import PostPreview from "components/PostPreview"
import EnvelopeIcon from "components/icons/envelope-icon"
import GithubIcon from "components/icons/github-icon"
import LinkedIn from "components/icons/linkedin-icon"
import Avatar from "components/Avatar"

import {getAllPosts} from "lib/posts"
import markdownToHtml from "lib/markdown"

import style from "../../styles/backdrop.module.css"
import React from "react"
import Button from "components/Button"

export default function BlogPage({allPosts}) {
  React.useEffect(() => {
    const body = document.getElementsByTagName("body")[0]
    body.classList.add("bg-gray-50")
    return () => body.classList.remove("bg-gray-50")
  }, [])

  return (
    <main className="max-w-3xl mx-auto px-5 mt-16 mb-10 relative">
      <Head>
        <title key="title">Blog | Abdullah Gira</title>
        <meta content="All my blog posts live here" name="description" />
        <meta
          property="og:url"
          content="https://abdullahgira.com/blog"
          key="og:url"
        />
        <meta
          property="og:title"
          content="Blog | Abdullah Gira"
          key="og:title"
        />
        <meta
          property="og:description"
          content="All my blog posts live here"
          key="og:description"
        />
        <meta
          property="twitter:description"
          content="All my blog posts live here"
          key="twitter:description"
        />
        <meta
          property="twitter:url"
          content="https://abdullahgira.com/blog"
          key="twitter:url"
        />
        <meta
          property="twitter:title"
          content="Blog | Abdullah Gira"
          key="twitter:title"
        />
      </Head>

      {/* Backdrop colors */}
      <div className={style.backdrop1} />
      <div className={style.backdrop2} />

      <section>
        <div className="border border-black p-1 rounded-full shadow-md inline-block">
          <Avatar />
        </div>

        <div className="mt-4">
          <h3 className="text-xl font-bold">ABDULLAH GIRA</h3>
          <p>Software Engineer who loves to talk about business.</p>

          <div className="mt-4 flex gap-4">
            <Link href="mailto:abdullaho.gira@gmail.com">
              <a href="mailto:abdullaho.gira@gmail.com">
                <EnvelopeIcon className="w-6" />
              </a>
            </Link>

            <Link href="mailto:abdullaho.gira@gmail.com">
              <a href="mailto:abdullaho.gira@gmail.com">
                <GithubIcon className="w-6" />
              </a>
            </Link>

            <Link href="mailto:abdullaho.gira@gmail.com">
              <a href="mailto:abdullaho.gira@gmail.com">
                <LinkedIn className="w-6" />
              </a>
            </Link>
          </div>
        </div>

        <div id="revue-embed" className="mt-8 pb-5 border-b border-black">
          <p className="font-bold mb-2">Newsletter</p>
          <form
            action="https://www.getrevue.co/profile/abdullahgira/add_subscriber"
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
          >
            <div className="flex items-center gap-4 mb-2 flex-wrap">
              <div class="revue-form-group">
                <input
                  className="bg-white shadow-md rounded-full px-5 py-3"
                  placeholder="Your email address..."
                  type="email"
                  name="member[email]"
                  id="member_email"
                />
              </div>

              <div class="revue-form-actions">
                <Button filled type="submit">
                  Subscribe
                </Button>
              </div>
            </div>
            <div class="text-xs text-gray-500 mt-4">
              By subscribing, you agree with Revue’s{" "}
              <a target="_blank" href="https://www.getrevue.co/terms">
                Terms of Service
              </a>{" "}
              and{" "}
              <a target="_blank" href="https://www.getrevue.co/privacy">
                Privacy Policy
              </a>
              .
            </div>
          </form>
        </div>
      </section>

      <section className="mt-10">
        {allPosts.length > 0
          ? allPosts.map((post) => <PostPreview key={post.date} {...post} />)
          : null}
      </section>
    </main>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug", "content"])

  const result = []
  for (let post of allPosts) {
    let content = await markdownToHtml(post.content || "")

    result.push({
      ...post,
      content,
    })
  }

  return {
    props: {allPosts: result},
  }
}
