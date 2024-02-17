import React from 'react'

const Exp = () => {

    const skills = [
        "Next.js",
        "JavaScript",
        "Tailwind",
        "Material-UI",
        "Framer-Motion",
        "Node",
        "MongoDB",
        "Redux"
      ];


  return (
    <div className='flex flex-col justify-center items-start mt-24 sm:mx-64 mx-8'>
        <h1 className='text-[#fff] text-[24px] font-black uppercase text-start mb-4'>Experience</h1>
        <div className='flex justify-between items-center flex-col sm:flex-row text-center sm:text-start'>
            <p className='text-gray-500 text-[18px] sm:w-1/3'>Avg 2023 - Present</p>
            <div className='flex flex-col gap-3'>
                <p className='text-[18px] tracking-wide'>Freelance - Fullstack Developer</p>
                <p className='text-gray-500  tracking-widest'>As a freelance web developer, I bring passion, creativity, and expertise to every project I undertake. With 2 years of experience in the industry,  I've had the privilege of collaborating with a diverse range of clients, from startups to established businesses.</p>
                <div className='flex flex-row flex-wrap gap-2 mx-8 sm:mx-0 justify-center items-center sm:justify-start'>
                    {skills.map((skill, index) => {
                        return(
                            <p key={skill + index} className='border-[#5345E6] border-2 p-2 bg-[#4b3bfc] bg-opacity-10 text-[#5345E6]'>{skill}</p>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Exp