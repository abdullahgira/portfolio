import React from "react"
import {useRouter} from "next/router"

import Button from "./Button"

const Pagination = ({totalPages, currentPage}) => {
  const router = useRouter()

  const newerPage = parseInt(currentPage) - 1 > 0
  const olderPage = parseInt(currentPage) + 1 <= parseInt(totalPages)

  return (
    <div className="flex items-center gap-4 my-2 md:my-5">
      {newerPage && (
        <Button
          className="flex items-center gap-2"
          onClick={() =>
            router.push(
              currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`
            )
          }
        >
          <span className="pb-1">&larr;</span> Newer
        </Button>
      )}

      {olderPage && (
        <Button
          className="flex items-center gap-2"
          onClick={() => router.push(`/blog/page/${currentPage + 1}`)}
        >
          Older <span className="pb-1">&rarr;</span>
        </Button>
      )}
    </div>
  )
}

export default Pagination
