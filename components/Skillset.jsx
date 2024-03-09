import React from 'react'

const Skillset = () => {

    const skills = [
        "React",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Sass",
        "Tailwind",
        "Material-UI",
        "Git",
        "Framer-Motion",
        "Firebase",
        "Node",
        "MongoDB",
        "Firebase",
        "Docker",
        "Three.js",
        "Redux",
        "Express",
        "Solidity"
      ];



  return (
    <div className='flex flex-col justify-center items-start mt-24 sm:mx-64 mx-8'>
        <h1 className='text-[#fff] text-[24px] font-black uppercase text-start mb-4'>Skills</h1>
        
        <div className='flex flex-row flex-wrap gap-2 justify-start items-center'>
            {skills.map((skill, index) => {
                return (
                    <p key={index} className='bg-[#232323] p-2 border-[#333333] border-2 '>{skill}</p>
                )
            })}
        </div>
    </div>
  )
}

export default Skillset