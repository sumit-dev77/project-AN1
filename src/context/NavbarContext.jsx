import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
export const NavContext = createContext()
export const NavbarColorContext= createContext()
const NavbarContext = ({children}) => {


const [navOpen, setNavOpen] = useState(false)
const [navColor, setNavColor] = useState('white')

const locate = useLocation().pathname
useEffect(function(){
  if(locate == '/project' || locate == '/agence'){
    setNavColor('black')
  }else{
  setNavColor('white')
  }
})

  return (
    <div>
        <NavContext.Provider value={[navOpen, setNavOpen]}>
         <NavbarColorContext.Provider value={[navColor, setNavColor]}>
          {children}
         </NavbarColorContext.Provider>
        </NavContext.Provider>
     
    </div>
  )
}

export default NavbarContext
