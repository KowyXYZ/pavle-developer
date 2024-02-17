import About from '@/components/About'
import Exp from '@/components/Exp'
import Footer from '@/components/Footer'
import Projects from '@/components/Projects'
import Skillset from '@/components/Skillset'
import React from 'react'

const page = () => {
  return (
    <div className='flex justify-start items-center mt-32 flex-col'>
        <h1 className='text-center sm:text-[44px] text-[32px] uppercase font-black'>Hello. I'm Pavle <br /><span className='bg-gradient-to-r from-violet-600 to-indigo-600 text-transparent bg-clip-text'>A Web Developer & Digital Creator</span></h1>
        <p className='text-gray-500 sm:w-full w-[300px] text-center tracking-widest'>I'm passionate about developing user interfaces, creating experiences some of 3d visuals and most important web applications.</p>
  
        <About/>
        <Skillset/>
        <Exp/>
        <Projects/>
 
    </div>
  )
}

export default page