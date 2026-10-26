import React, { useContext, useState } from 'react'
import  gsap  from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { NavContext } from '../../context/NavbarContext'
import { Link } from 'react-router-dom'

const FullScreenNav = () => {

const [navOpen , setNavOpen] = useContext(NavContext)
console.log(navOpen);

const ScreenRef = useRef(null)



const stairsparent = useRef(null)
const fullScreenNavRef = useRef()

function gsapAnimation(){
  
  const tl = gsap.timeline()
   tl.to('.fullscreennav',{
      display:'block'
    })
    tl.to('.stairblocks',{
      delay:0.2,
      height:'100%',
      stagger:{
        amount:-0.2
      }
    })
    tl.to('.link',{
      opacity:1,
      rotateX:0,
      stagger:{
        amount:0.2
      }
    })
   tl.to('.navlink',{
    opacity:1,
  
   })
  }

  function gsapAnimationReverse(){
  
  const tl = gsap.timeline()
   
    tl.to('.link',{
      opacity:0,
      rotateX:90,
      stagger:{
        amount:0.2
      }
    })
     tl.to('.stairblocks',{
      height:0,
      stagger:{
        amount:0.1
      }
    })
   tl.to('.navlink',{
    opacity:0
   })
    tl.to('.fullscreennav',{
      display:'none'
    })
  }
 
  useGSAP(function(){
   if(navOpen){
   
    gsapAnimation()
  }else{
   gsapAnimationReverse()
  }
   },[navOpen])
 
  




  return (
  
     <div ref={ScreenRef} className='fullscreennav z-50 h-screen w-full overflow-hidden absolute '>
       <div className='h-screen w-full fixed'>
          <div className='h-full w-full flex'>
             <div className='stairblocks h-full w-1/6 bg-black'></div>
             <div className='stairblocks h-full w-1/6 bg-black'></div>
             <div className='stairblocks h-full w-1/6 bg-black'></div>
             <div className='stairblocks h-full w-1/6 bg-black'></div>
             <div className='stairblocks h-full w-1/6 bg-black'></div>
             <div className='stairblocks h-full w-1/6 bg-black'></div>
             
     
     </div>
      </div>
      <div  className='relative'>
   
        <div  onClick={()=>{
            setNavOpen(false)
         }} className='navlink h-20 w-20 absolute cursor-pointer right-0 mt-4 mr-4'>
        <div className='h-28 w-[0.2vw] rotate-45 origin-top right-0 absolute bg-[#D3FD59]'></div>
         <div className='h-28 w-[0.2vw] -rotate-45 origin-top bg-[#D3FD59]'></div>
      </div>

      <div  ref={fullScreenNavRef} className='lg:py-35 py-70'>
        <div className='link origin-top relative border-t-1 border-gray-700'>
           <h1 className='font-[font2] text-white uppercase lg:leading-24 lg:pt-3 pt-2 text-center text-6xl lg:text-[7vw]'> Projects</h1>
       <div onClick={()=>{
            setNavOpen(false)
         }}
       className='moveLink absolute flex top-0'>
         <div className= 'moveX flex items-center text-black bg-[#74cef1]'>
            <Link to="/project" className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</Link>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
         <Link to="/project" className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</Link>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
        
        </div>
         <div className= 'moveX flex items-center text-black bg-[#74cef1]'>
          <Link to="/project" className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</Link>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
        <Link to="/project" className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</Link>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
        
        </div>
       </div>
       </div>
           <div className='link origin-top relative border-t-1 border-gray-700'>
           <h1 className='font-[font2] text-white uppercase lg:leading-24 lg:pt-3 pt-2 text-center text-6xl lg:text-[7vw]'>Agence</h1>
       <div  onClick={()=>{
            setNavOpen(false)
         }} 
        className='moveLink absolute flex top-0'>
         <div className= 'moveX flex items-center text-black bg-[#74cef1]'>
           <Link to="/agence" className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</Link>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
         <Link to="/agence" className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</Link>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
        
        </div>
         <div className= 'moveX flex items-center text-black bg-[#74cef1]'>
           <Link to="/agence" className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</Link>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
         <Link to="/agence" className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</Link>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
        
        </div>
       </div>
       </div>
          <div className='link origin-top relative border-t-1 border-gray-700'>
           <h1 className='font-[font2] text-white uppercase lg:leading-24 lg:pt-3 pt-2 text-center text-6xl lg:text-[7vw]'>contact</h1>
       <div className='moveLink absolute flex top-0'>
         <div className= 'moveX flex items-center text-black bg-[#74cef1]'>
            <h2  className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</h2>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
          <h2  className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</h2>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
        
        </div>
         <div className= 'moveX flex items-center text-black bg-[#74cef1]'>
            <h2  className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</h2>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
          <h2  className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</h2>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
        
        </div>
       </div>
       </div>
          <div className='link origin-top relative border-t-1 border-gray-700'>
           <h1 className='font-[font2] text-white uppercase lg:leading-24 lg:pt-3 pt-2 text-center text-6xl lg:text-[7vw]'>Blogue</h1>
       <div className='moveLink absolute flex top-0'>
         <div className= 'moveX flex items-center text-black bg-[#74cef1]'>
            <h2  className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</h2>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
          <h2  className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</h2>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
        
        </div>
         <div className= 'moveX flex items-center text-black bg-[#74cef1]'>
            <h2  className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</h2>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
          <h2  className='font-[font2] uppercase lg:leading-24 whitespace-nowrap pt-3 text-center text-6xl lg:text-[7vw]'>POUR TOUT VOIR</h2>
            <img className='lg:h-25 h-13 w-50 lg:w-80  object-cover rounded-full shrink-0' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?lg:w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
        
        </div>
       </div>
       </div>
      </div>
      </div>
    </div>

  )
}

export default FullScreenNav
