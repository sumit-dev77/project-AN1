import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Project from './pages/Project'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'

const App = () => {

 

  return (
    <div className='overflow-x-hidden'>

      <FullScreenNav/>
     <Navbar />
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="/agence" element={<Agence />} />
      <Route path="/project" element={<Project />} />
      </Routes> 
    </div>
  )
}

export default App
