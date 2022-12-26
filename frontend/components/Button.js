import React from "react"
import {PulseLoader} from "react-spinners"

const Button = ({filled, className, loading, children, ...props}) => {
  const bg = filled ? "bg-black text-white shadow-md" : "border border-black"
  return (
    <button
      className={`rounded-full w-28 md:w-32 py-3 ${bg} ${className}`}
      {...props}
    >
      {loading ? <PulseLoader color="black" size={6} /> : children}
    </button>
  )
}

export default Button
