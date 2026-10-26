import  gsap  from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Transition = (props) => {

     const AppisChild = useRef(null)
     const currentPath = useLocation().pathname

     const stairsparent = useRef(null)
     const tl = gsap.timeline()

  useGSAP(function(){

     tl.to(stairsparent.current,{
      display:'block'
    })

    tl.from('.stair',{
      height:0,
      stagger:{
        amount:-0.15
      }
    })

   

   tl.to('.stair',{
    y:'100%',
   stagger:{
        amount:-0.2
      }
   })
    
   tl.to(stairsparent.current,{
      display:'none'
    })
    tl.to('.stair',{
    y:'0%'
  })

  gsap.from(AppisChild.current,{
    opacity:0,
    delay:1,
    scale:1.2
  })
  },[currentPath])
  return (
<div>
      <div ref={stairsparent} className='h-screen w-screen z-10 fixed top-0 absolute flex'>
      <div className='h-full w-full flex'>
      <div className='stair h-full w-1/6 bg-black'></div>
       <div className='stair h-full w-1/6 bg-black'></div>
        <div className='stair h-full w-1/6 bg-black'></div>
          <div className='stair h-full w-1/6 bg-black'></div>
           <div className='stair h-full w-1/6 bg-black'></div>
            <div className='stair h-full w-1/6 bg-black'></div>
             
     
     </div>
     </div>
  <div  ref= {AppisChild}>
     {props.children}
  </div>
</div>
  )
}

export default Transition
