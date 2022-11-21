import React from "react"

const Button = ({filled, className, ...props}) => {
  const bg = filled ? "bg-black text-white shadow-md" : "border border-black"
  return (
    <button
      className={`rounded-full px-8 py-3 ${bg} ${className}`}
      {...props}
    ></button>
  )
}

export default Button
