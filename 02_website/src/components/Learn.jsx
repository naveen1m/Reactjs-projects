import React from 'react'
import web from "../assets/img/web dev.jpeg"
import ml from "../assets/img/ml.jpeg"
import pm from "../assets/img/pm.jpeg"

function Learn() {
  return (
    <>
    <div className='max-w-[1240px] p-2 mx-auto height-[350px] bg-[#F5F4F6]  md:grid grid-cols-3 '>
        <div className='h-[250px] col-span-1 mt-3 '>
            <img src={web} alt='web development' className='h-[250px] w-[340px] mx-auto md:w-full ' />
        </div>
        <div className='h-[250px]  col-span-2 mt-3 ml-4 '>
            <h1 className='text-center text-2xl text-[#485696] font-bold '>Web Development</h1>
            <p>Web development creates websites through coding and design. It includes front-end and back-end development and aims to create user-friendly, secure, and visually appealing websites.</p>
            
        </div>
        
        
    </div>
    <div className='max-w-[1240px] p-2 mx-auto height-[350px] bg-[#F5F4F6] md:grid grid-cols-3 '>
        <div className='h-[250px]  col-span-1 mt-3 '>
            <img src={ml} alt='machine learning' className='h-[250px] w-[340px] mx-auto md:w-full ' />
        </div>
        <div className='h-[250px]  col-span-2 mt-3 ml-4 '>
            <h1 className='text-center text-2xl text-[#485696] font-bold '>Machine Learning</h1>
            <p className=' ' >Machine learning is an AI technique that involves training algorithms to identify patterns in data and make predictions or decisions based on that data, without being explicitly programmed for each task.</p>
        </div>
        
    </div>
    <div className='max-w-[1240px] p-2 mx-auto height-[350px] bg-[#F5F4F6]  md:grid grid-cols-3 '>
        <div className='h-[250px] col-span-1 mt-3 '>
            <img src={pm} alt='project management' className='h-[250px] w-[340px] mx-auto md:w-full ' />
        </div>
        <div className='h-[250px] col-span-2 mt-3 ml-4 '>
            <h1 className='text-center text-2xl text-[#485696] font-bold '>Project Management</h1>
            <p>roject management involves planning, organizing, and overseeing the execution of a project to achieve specific goals and objectives. This includes defining project requirements, allocating resources, managing timelines, and monitoring progress to ensure successful completion.</p>
        </div>
        
    </div>
    </>
  )
}

export default Learn
