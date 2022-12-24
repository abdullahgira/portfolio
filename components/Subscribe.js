import Link from "next/link"
import React from "react"

import Button from "./Button"

const Subscribe = () => {
  return (
    <div className="mt-8 pb-5">
      <p className="font-bold mb-2">Newsletter</p>
      <form
        action="https://www.getrevue.co/profile/abdullahgira/add_subscriber"
        method="post"
        id="revue-form"
        name="revue-form"
        target="_blank"
      >
        <div className="flex items-start gap-4 mb-2 flex-wrap">
          <div>
            <input
              className="bg-white shadow-md rounded-full px-5 py-3 w-60 md:w-auto"
              placeholder="Your email address..."
              type="email"
              name="member[email]"
            />
          </div>
          <div className="flex flex-col items-end">
            <Button filled type="submit">
              Subscribe
            </Button>
            {/* <small className="text-gray-500 mt-1">
              <i>
                Powered by{" "}
                <Link href="https://www.getrevue.co/">
                  <a className="underline" target="_blank">
                    Revue
                  </a>
                </Link>
              </i>
            </small> */}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Subscribe
