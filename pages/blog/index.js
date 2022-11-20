import Head from "next/head"
import PostPreview from "components/post-preview"
import {getAllPosts} from "lib/posts"

export default function BlogPage({allPosts}) {
  return (
    <main className="max-w-2xl mt-16 mb-10 mx-auto px-5">
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
      <section className="flex flex-col items-center justify-center1">
        <img
          src="portfolio/me.webp"
          className="w-20 bg-blue-700 rounded-full"
          alt="my profile picture"
        />

        <div id="revue-embed">
          <form
            action="https://www.getrevue.co/profile/abdullahgira/add_subscriber"
            method="post"
            id="revue-form"
            name="revue-form"
            target="_blank"
          >
            <div class="revue-form-group">
              <label for="member_email">Email address</label>
              <input
                class="revue-form-field"
                placeholder="Your email address..."
                type="email"
                name="member[email]"
                id="member_email"
              />
            </div>
            <div class="revue-form-group">
              <label for="member_first_name">
                First name <span class="optional">(Optional)</span>
              </label>
              <input
                class="revue-form-field"
                placeholder="First name... (Optional)"
                type="text"
                name="member[first_name]"
                id="member_first_name"
              />
            </div>
            <div class="revue-form-group">
              <label for="member_last_name">
                Last name <span class="optional">(Optional)</span>
              </label>
              <input
                class="revue-form-field"
                placeholder="Last name... (Optional)"
                type="text"
                name="member[last_name]"
                id="member_last_name"
              />
            </div>
            <div class="revue-form-actions">
              <input
                type="submit"
                value="Subscribe"
                name="member[subscribe]"
                id="member_submit"
              />
            </div>
            <div class="revue-form-footer">
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
      <section className="mt-20">
        {allPosts.length > 0
          ? allPosts.map((post) => <PostPreview key={post.date} {...post} />)
          : null}
      </section>
    </main>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug", "readTime"])

  return {
    props: {allPosts},
  }
}
