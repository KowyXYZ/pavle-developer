import Image from 'next/image'
import React from 'react'

const Projects = () => {
  return (
    <div id='projekti' className='flex flex-col justify-center items-start mt-24 sm:mx-64 mx-8'>
        <h1 className='text-[#fff] text-[24px] font-black uppercase text-start mb-4'>Projects</h1>
        <div className='flex flex-col sm:flex-row flex-wrap gap-5 '>
            <div className='w-[350px] sm:w-[675px] h-[200px]  bg-[#1C1C1C] border-2 border-transparent hover:border-[#2d2d2d] flex  flex-col rounded-2xl'>
                <div className='flex justify-end items-center gap-5 p-4'>
                    <a href="https://github.com/KowyXYZ/weather-app"><Image src='/assets/white.png' width={25} height={25} /></a>
                    <a href="https://weather-app-ecru-mu.vercel.app/"><Image src='/assets/link.svg' className='invert' width={25} height={25}/></a>    
                </div>
            <div className='flex justify-center items-center flex-col gap-5'>
                <h1 className='text-[24px] uppercase font-black mt-5'>Weather App</h1>
                    <div className='flex gap-2 justify-center px-2 items-center flex-wrap sm:text-[18px] text-gray-500'>
                        <p>React</p>
                        <p>Javascript</p>
                        <p>Tailwind</p>
                    </div>
            </div>
            </div>

            <div className='w-[350px] sm:w-[675px]  bg-[#1C1C1C] border-2 border-transparent hover:border-[#2d2d2d] flex  flex-col rounded-2xl'>
                <div className='flex justify-end items-center gap-5 p-4'>
                      <a href="https://github.com/KowyXYZ/room-chat-app"><Image src='/assets/white.png' width={25} height={25} /></a>
                    <a href="https://room-chat-app-plum.vercel.app/"><Image src='/assets/link.svg' className='invert' width={25} height={25}/></a>    
                </div>
            <div className='flex justify-center items-center flex-col gap-5'>
                <h1 className='text-[24px] uppercase font-black mt-5'>Room Chat App</h1>
                    <div className='flex gap-2 justify-center px-2 items-center flex-wrap sm:text-[18px] text-gray-500'>
                        <p>React</p>
                        <p>Javascript</p>
                        <p>Tailwind</p>
                        <p>Firebase</p>
                    </div>
            </div>
            </div>

            <div className='w-[350px] sm:w-[675px]  bg-[#1C1C1C] border-2 border-transparent hover:border-[#2d2d2d] flex  flex-col rounded-2xl'>
                <div className='flex justify-end items-center gap-5 p-4'>
                <a href="https://github.com/KowyXYZ/movie-db-project"><Image src='/assets/white.png' width={25} height={25} /></a>
                    <a href="https://movie-db-project-chi.vercel.app/"><Image src='/assets/link.svg' className='invert' width={25} height={25}/></a>    
                </div>
            <div className='flex justify-center items-center flex-col gap-5'>
                <h1 className='text-[24px] uppercase font-black mt-5'>Movie DB Project</h1>
                    <div className='flex gap-2 justify-center px-2 items-center flex-wrap sm:text-[18px] text-gray-500'>
                        <p>React</p>
                        <p>Javascript</p>
                        <p>Tailwind</p>
                        <p>Framer-Motion</p>
                        <p>API</p>
                    </div>
            </div>
            </div>

            <div className='w-[350px] sm:w-[675px] h-[200px]  bg-[#1C1C1C] border-2 border-transparent hover:border-[#2d2d2d] flex  flex-col rounded-2xl'>
                <div className='flex justify-end items-center gap-5 p-4'>
                <a href="https://github.com/KowyXYZ/portfolio-dev"><Image src='/assets/white.png' width={25} height={25} /></a>
                    <a href="https://portfolio-dev-kowyxyz.vercel.app/"><Image src='/assets/link.svg' className='invert' width={25} height={25}/></a>    
                </div>
            <div className='flex justify-center items-center flex-col gap-5'>
                <h1 className='text-[24px] uppercase font-black mt-5'>Portfolio v1.0</h1>
                    <div className='flex gap-2 justify-center px-2 items-center flex-wrap sm:text-[18px] text-gray-500'>
                        <p>React.js</p>
                        <p>Javascript</p>
                        <p>Tailwind</p>
                        <p>Framer-Motion</p>
                        <p>Three.js</p>
                    </div>
            </div>
            </div>

            <div className='w-[350px] sm:w-[675px] h-[200px]  bg-[#1C1C1C] border-2 border-transparent hover:border-[#2d2d2d] flex  flex-col rounded-2xl'>
                <div className='flex justify-end items-center gap-5 p-4'>
                <a href="https://github.com/KowyXYZ/dog-grooming"><Image src='/assets/white.png' width={25} height={25} /></a>
                    <a href="https://github.com/KowyXYZ/dog-grooming"><Image src='/assets/link.svg' className='invert' width={25} height={25}/></a>    
                </div>
            <div className='flex justify-center items-center flex-col gap-5'>
                <h1 className='text-[24px] uppercase font-black mt-5'>Dog Grooming App</h1>
                    <div className='flex gap-2 justify-center px-2 items-center flex-wrap sm:text-[18px] text-gray-500'>
                        <p>Next.js</p>
                        <p>Javascript</p>
                        <p>Tailwind</p>
                        <p>MongoDB</p>
                        <p>Express</p>
                        <p>Google Cloud</p>
                    </div>
            </div>
            </div>

            <div className='w-[350px] sm:w-[675px] h-[200px]  bg-[#1C1C1C] border-2 border-transparent hover:border-[#2d2d2d] flex  flex-col rounded-2xl'>
                <div className='flex justify-end items-center gap-5 p-4'>
                <a href="https://github.com/KowyXYZ/e-commerce-repository-two"><Image src='/assets/white.png' width={25} height={25} /></a>
                    <a href="https://e-commerce-repository-two.vercel.app/"><Image src='/assets/link.svg' className='invert' width={25} height={25}/></a>    
                </div>
            <div className='flex justify-center items-center flex-col gap-5'>
                <h1 className='text-[24px] uppercase font-black mt-5'>E-Commerce App </h1>
                    <div className='flex gap-2 justify-center px-2 items-center flex-wrap sm:text-[18px] text-gray-500'>
                        <p>React.js</p>
                        <p>Javascript</p>
                        <p>Redux</p>
                        <p>API</p>
                        <p>Tailwind</p>
                    </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Projects