export default function MoviePlayIcon({size, className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="currentColor"
      viewBox="0 0 12 12"
      className={className}
    >
      <path
        fillRule="evenodd"
        d="M10 1.5H2c-.552 0-1 .448-1 1v7c0 .552.448 1 1 1h8c.552 0 1-.448 1-1v-7c0-.552-.448-1-1-1zm0 3h-.232l-1.334-2H10v2zm-5.232 0l-1.333-2h1.297l1.334 2H4.768zm2.5 0l-1.333-2h1.298l1.333 2H7.268zM2 2.5h.232l1.334 2H2v-2zm0 7v-4h8l.001 4H2z"
      ></path>
      <path fillRule="evenodd" d="M5 9l2.75-1.5L5 6v3z"></path>
    </svg>
  )
}
