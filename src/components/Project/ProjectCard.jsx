import React from 'react'

const ProjectCard = (props) => {
  return (
    <>
  
      <div className="relative group w-full lg:w-1/2 h-[50vw] sm:h-[40vw] lg:h-[35vw] bg-black hover:rounded-[30px] overflow-hidden transition-all">
        <img
          className="h-full w-full object-cover"
          src={props.image1}
          alt="Project 1"
        />
        <div className="group-hover:opacity-100 h-full w-full flex items-center justify-center bg-black/30 transition-all opacity-0 left-0 top-0 absolute">
          <h2 className="font-[font1] text-xl sm:text-3xl lg:text-6xl rounded-full px-5 py-3 uppercase text-white">
            View Project
          </h2>
        </div>
      </div>

   
      <div className="relative group w-full lg:w-1/2 h-[50vw] sm:h-[40vw] lg:h-[35vw] bg-black hover:rounded-[30px] overflow-hidden transition-all mt-4 lg:mt-0">
        <img
          className="h-full w-full object-cover"
          src={props.image2}
          alt="Project 2"
        />
        <div className="group-hover:opacity-100 h-full w-full flex items-center justify-center bg-black/30 transition-all opacity-0 left-0 top-0 absolute">
          <h2 className="font-[font1] text-xl sm:text-3xl lg:text-6xl rounded-full px-5 py-3 uppercase text-white">
            View Project
          </h2>
        </div>
      </div>
    </>
  )
}

export default ProjectCard
