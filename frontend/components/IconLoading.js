export default function IconLoading() {
  // https://icons8.com/preloaders/en/circular
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1"
      viewBox="0 0 128 128"
      fill="none"
    >
      <g>
        <path
          fill="currentColor"
          d="M64 9.75A54.25 54.25 0 009.75 64H0a64 64 0 01128 0h-9.75A54.25 54.25 0 0064 9.75z"
        ></path>
        <animateTransform
          attributeName="transform"
          dur="600ms"
          from="0 64 64"
          repeatCount="indefinite"
          to="360 64 64"
          type="rotate"
        ></animateTransform>
      </g>
    </svg>
  )
}
