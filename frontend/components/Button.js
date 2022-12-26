import React from "react"
import {PulseLoader} from "react-spinners"

const Button = ({filled, className, loading, children, ...props}) => {
  const bg = filled ? "bg-black text-white shadow-md" : "border border-black"
  return (
    <button
      className={`rounded-full px-6 md:px-8 py-3 ${bg} ${className}`}
      {...props}
    >
      {loading ? <PulseLoader color="black" size={6} className='px-6 md:px-8' /> : children}
    </button>
  )
}

export default Button
