import React from 'react'
import Video from '../components/Home/Video'
import Maintext from '../components/Home/Maintext'
import BottomText from '../components/Home/BottomText'
const Home = () => {
  return (
    
    
    <div>
    <div className='w-screen h-screen fixed'>
        <Video />
    </div>
    <div className=' w-screen h-screen relative flex flex-col justify-between'>
      <Maintext />
      <BottomText />
    </div>
    </div>
  )
}

export default Home
