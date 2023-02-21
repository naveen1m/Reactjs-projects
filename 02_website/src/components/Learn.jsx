import React from 'react'

function Learn({techName, info, image}) {
  return (
    <>
    <div className='max-w-[1240px] p-2 mx-auto height-[350px] bg-[#F5F4F6]  md:grid grid-cols-3 '>
        <div className='h-[250px] col-span-1 mt-3 '>
            <img src={image} alt={techName} className='h-[250px] w-[340px] mx-auto md:w-full ' />
        </div>
        <div className='h-[250px]  col-span-2 mt-3 ml-4 '>
            <h1 className='text-center text-2xl text-[#485696] font-bold '>{techName}</h1>
            <p>{info}</p>            
        </div> 
    </div>
   
    </>
  )
}
export default Learn
