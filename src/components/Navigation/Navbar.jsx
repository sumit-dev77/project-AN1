import React, { useContext, useRef } from 'react'
import { NavbarColorContext, NavContext } from '../../context/NavbarContext'

const Navbar = () => {
   
  const [navOpen , setNavOpen]= useContext(NavContext)
   const [navColor, setNavColor] = useContext(NavbarColorContext)
     const NavGreenRef = useRef(null) 
     const NavtextRef = useRef(null)
  return (
    <div  className='absolute z-4 flex w-full justify-between hidden'>
      <div className="lg:h-15 lg:w-26 sm:w-8 
                text-white lg:text-5xl text-5xl 
                p-1 font-bold 
                drop-shadow-[2px_2px_4px_rgba(0,0,0,0.8)]">
  PRO1
</div>

   
         <div onClick={()=>{
            setNavOpen(true)
         }} onMouseEnter={()=>{
            NavGreenRef.current.style.height ='100%'
            NavtextRef.current.style.color= 'black'
         }} className='lg:h-12 h-14 lg:w-65 w-45 bg-black relative'>
             <div  onMouseLeave={()=>{
            NavGreenRef.current.style.height ='0%'
             NavtextRef.current.style.color= 'white'
         }}
          ref={NavGreenRef} className='bg-[#e943fc] cursor-pointer transition-all h- w-full absolute '> 
          
         <div ref={NavtextRef} className='text-white absolute lg:left-45 left-23'> 
            <div onMouseEnter={()=>{

            }} className='font-semibold lg:text-2xl text-xl -mt-3'>______</div>
            <div className='font-semibold lg:text-2xl text-xl -mt-6 '>&nbsp;&nbsp;&nbsp;&nbsp;___</div>
          </div>
          </div>
       </div>
     
    </div>
  )
}

export default Navbar
