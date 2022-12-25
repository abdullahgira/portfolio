import React from "react"

const Avatar = () => {
  return (
    <div className="w-24 h-24 bg-black bg-opacity-40 rounded-full overflow-hidden shadow-md">
      <img
        src="/portfolio/me.jpg"
        alt="my profile picture"
        className="object-cover"
      />
    </div>
  )
}

export default Avatar
