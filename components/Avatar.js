import React from "react"

const Avatar = () => {
  return (
    <div className="w-24 h-24 bg-blue-900 bg-opacity-40 object-cover rounded-full overflow-hidden">
      <img
        src="/portfolio/me.png"
        alt="my profile picture"
        className="w-32 h-32 object-contain"
      />
    </div>
  )
}

export default Avatar
