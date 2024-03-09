"use client"

import { useState } from "react";

const Navbar = () => {

  const [first, setfirst] = useState({
    home: true,
    about: false,
    projects: false
  })

  
  return (
    <div  className="flex fixed top-0 left-0 right-0 justify-center items-center opo">
      <div id="x" className=" sm:border-2 sm:border-[#404040b5] w-[300px] sm:w-[600px] my-4 rounded-full   sm:bg-[rgba(114,114,114,.2)] flex  justify-center items-center py-2 gap-8 sm:gap-16 text-[14px] sm:text-[18px]" >
        <a  onClick={() => {scrollTo(0, 0); setfirst({...first, home: true, about:false, projects:false})}} className={`${first.home ? 'p-2 px-5 bg-[rgba(79,79,79,.25)] rounded-full ' : 'px-5'} transition-all delay-75 ease-in-out`} >Home</a>
        <a href="#about"  onClick={() => { setfirst({...first, about: true, home:false, projects:false}) }} className={`${first.about ? 'p-2 px-5 bg-[rgba(79,79,79,.25)] rounded-full' : 'px-5'}  transition-all delay-75 ease-in-out`}>About</a>
        <a href="#projekti"  onClick={() => { setfirst({...first, about: false, home:false, projects:true})}} className={`${first.projects ? 'p-2 px-5 bg-[rgba(79,79,79,.25)] rounded-full' : 'px-5'}  transition-all delay-75 ease-in-out`}>Projects</a>
        {/* <a href='/'>Chat</a> */}
    </div>
    </div>
  )
}

export default Navbar