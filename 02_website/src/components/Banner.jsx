import React from 'react'
import Typed from 'react-typed'
function Banner() {
  return (
    <div className='bg-[#64A6BD] w-full py-[100px] '>
        <div className='max-w-[1240px] my-[50px] mx-auto text-center font-bold'>
            <div className='text-black text-xl md:text-3xl mb-3 '>Learn with us</div>
            <div className='text-white text-3xl md:text-[80px] '>Grow with us</div>
            <div className='text-white text-2xl md:text-[55px] mt-3 '>
                Learn 
                <Typed className='pl-3 text-[#35FDD2]'
                    strings={['web development',
                    'machine learning',
                    'project development']}
                    typeSpeed={80}
                    backDelay={150}
                    backSpeed={100}
                    
                    loop
                />
                <br></br>
                <button className='bg-[#4F7CAC] hover:bg-[#476F9A] text-white px-3 py-1 rounded text-[35px] mt-6 font-thin '>Get started</button>
                    
                
            </div>
        </div>
    </div>
  )
}

export default Banner
