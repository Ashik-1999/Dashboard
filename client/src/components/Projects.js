import React from 'react'
import ProjectData from './ProjectData'

const Projects = () => {
  return (
    <>
        <div className="flex justify-between p-4 ">
            <p className="text-xl ">Projects</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-3 flex items-center justify-center">
            <span>+ Add Project</span>
            </button>
        </div>
        <ProjectData/>
    </>
  )
}

export default Projects
