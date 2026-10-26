import React from 'react'

const Video = () => {
  return (
    <div className="w-full h-full rounded-full overflow-hidden">
      <video
        className="h-full w-full object-cover"
        src="/video/69496b2d.mp4"  
        autoPlay
        loop
        muted
      ></video>
    </div>
  )
}

export default Video
