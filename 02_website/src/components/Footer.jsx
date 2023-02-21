import React from 'react'
import {AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'
function Footer() {
  return (
    <div className='w-full mx-auto bg-[#AECFD6] p-4 sm:mt-6 md:grid grid-cols-3'>
        <div className='max-w-1240px mx-auto md:flex justify-between px-[40px] col-span-1 '>
            <div className='py-[40px] '>
                <h1 className='text-[33px] md:text-[50px] font-bold text-[#272838] '>OsCube Tech</h1>
                <p className=' text-[#203C46] '>OsCube tech is a renowned online learning platform from last 5 years and we are helping more student to learn in a better and effective way possible.</p>
                <span className=' text-[#f6fdff] flex flex-row py-5 justify-between w-[70%] text-[40px] 5 '>
                   <a href="https://github.com/stupiddint"> <AiOutlineGithub className='hover:scale-110 duration-300 cursor-pointer' /></a>
                    <a href='https://www.linkedin.com/in/naveen-kumar-814903228/'><AiFillLinkedin className='hover:scale-110 duration-300 cursor-pointer' /></a>
                    <a href='https://www.instagram.com/navstr10/'><AiOutlineInstagram className='hover:scale-110 duration-300 cursor-pointer' /></a>
                    <a href='https://twitter.com/stupiddint'><AiOutlineTwitter className='hover:scale-110 duration-300 cursor-pointer' /></a>
                </span>
            </div>
        </div>
        <div className='max-w-1240px mx-auto md:flex justify-between px-[40px] col-span-2 md:w-[70%]  mt-6 '>
            <div className='col-span-1 w-[33%] mr-1'>
                <h3 className='font-semibold text-[25px] md:text-[33px] text-[#272838] '>Solutions</h3>
                <p className='text-[#182c35] hover:text-[#f6fdff] '>Analytics</p>
                <p className='text-[#182c35] hover:text-[#f6fdff] '>Marketing</p>
                <p className='text-[#182c35] hover:text-[#f6fdff] '>Commerce</p>
                <p className='text-[#182c35] hover:text-[#f6fdff] '>Insights</p>
            </div>
            <div className='col-span-1 w-[33%] mr-1'>
                <h3 className='font-semibold text-[25px] md:text-[33px] text-[#272838] '>Support</h3>
                <p className='text-[#182c35] hover:text-[#f6fdff] '>pricing</p>
                <p className='text-[#182c35] hover:text-[#f6fdff] '>documentation</p>
                <p className='text-[#182c35] hover:text-[#f6fdff] '>Guides</p>
                <p className='text-[#182c35] hover:text-[#f6fdff] '>API Status</p>
            </div>
            <div className='col-span-1 w-[33%] mr-1'>
                <h3 className='font-semibold text-[25px] md:text-[33px] text-[#272838]'>Company</h3>
                <p className='text-[#182c35] hover:text-[#f6fdff] '>About</p>
                <p className='text-[#182c35] hover:text-[#f6fdff] '>Blog</p>
                <p className='text-[#182c35] hover:text-[#f6fdff] '>Jobs</p>
                <p className='text-[#182c35] hover:text-[#f6fdff] '>Press</p>
                <p className='text-[#182c35] hover:text-[#f6fdff] '>Careers</p>
            </div>
            
            

        </div>
      
    </div>
  )
}

export default Footer
