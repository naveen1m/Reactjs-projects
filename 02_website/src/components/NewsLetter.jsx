import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full bg-[#AECFD6] p-4 sm:mt-6'>
        <div className='max-w-1240px mx-auto md:flex justify-between px-[40px] '>
            <div className='py-[40px] '>
                <h1 className='text-[36px] md:text-[40px] font-semibold text-[#254855] '>Want to learn latest I.T skills?</h1>
                <span className='texxt-black text-[#203C46] '>
                    Sign up to our newsletter and stay up to date
                </span>
            </div>
            <div>
                <input type='text' placeholder='Email' className='rounded md:mb-2 p-2 mr-1 sm:w-full text-slate-300 '/>
                <button className='bg-[#4F7CAC] hover:bg-[#476F9A] delay-300 text-white px-3 py-1 rounded text-[35px] mt-1 md:mt-6 font-thin '>Get started</button>
                <br/>
                <p className='text-[#203C46] mt-1'>We care about the protection of your data. Read our <br/> <a href='#' className='text-[#40788C] '>Privacy Policy</a></p>
                
            </div>
        </div>
      
    </div>
  )
}

export default NewsLetter
