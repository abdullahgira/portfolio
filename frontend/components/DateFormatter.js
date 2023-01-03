import {parseISO, format} from "date-fns"

export default function DateFormatter({dateString}) {
  if (!dateString) return "Publish date"

  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, "d LLLL yyyy")}</time>
}
