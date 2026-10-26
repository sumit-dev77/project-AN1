import React from 'react'
import { Link } from 'react-router-dom'
const BottomText = () => {
  return (
    <div className='font-[font1] text-center pt-3  text-white flex justify-center gap-4 '  >
      <p className='absolute lg:w-120 w-80 lg:right-7 lg:bottom-40 bottom-30 font-[font1] leading-6 lg:text-lg text-xs'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m Sumit Shah, a software enthusiast exploring React, Tailwind CSS, and JavaScript. Passionate about frontend creativity and full stack growth,
         I love crafting responsive designs, smooth user experiences,
          and learning new frameworks to transform ideas into functional,
           modern web applications.</p>
      <Link to="/project" className='uppercase border-[0.2vw] leading-[5vw]  rounded-full lg:text-[6.5vw] text-[8.5vw] pl-[2vw] pr-[2vw] lg:pt-3 pt-2 lg:mb-[1vw] mb-8 hover:text-[#e943fc] text-[8vw]0'>Project</Link>
      <Link to="/agence"  className='uppercase border-[0.2vw] leading-[5vw] rounded-full lg:text-[6.5vw] text-[8.5vw] pl-[2vw] pr-[2vw] lg:pt-3 pt-2 lg:mb-[1vw]  mb-8 hover:text-[#e943fc]'>Agence</Link>
    </div>
  )
}

export default BottomText
