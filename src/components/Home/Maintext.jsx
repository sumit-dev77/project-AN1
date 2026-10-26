import React from 'react'
import Video from './Video'
import TextVideo from './TextVideo'
const Maintext = () => {
  return (
<div className='font-[font1] text-center pt-3 mt-70 lg:mt-0  text-white'>
    <div className='lg:text-[9vw] text-[11vw] uppercase lg:leading-[8.5vw] leading-[11vw]  justify-center items-center flex'>
      design
      </div>

    <div className='lg:text-[9vw] text-[11vw] uppercase lg:leading-[8.5vw] leading-[11vw]  justify-center items-center flex '>
      devel
<div className='h-[8vw] w-[16vw] rounded-full overflow-hidden -mt-[1vw] leading-[10vw] justify-center items-center flex'>
  <TextVideo/>
</div>
     p
      </div>

    <div className='lg:text-[9vw] text-[11vw] uppercase lg:leading-[8.5vw] leading-[11vw]  justify-center items-center flex'>
      deploy
      </div>
</div>
  )
}

export default Maintext
