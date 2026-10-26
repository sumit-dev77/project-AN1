import React, { useRef, useEffect } from 'react'

const Video = () => {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1 
    }
  }, [])

  return (
    <div className="w-full h-full">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src="/video/VN20260808_171138.mp4" 
        autoPlay
        loop
        muted
      ></video>
    </div>
  )
}

export default Video
