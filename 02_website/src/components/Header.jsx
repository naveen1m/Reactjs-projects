import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
function Header() {
    const [toggle, setToggle] = useState(false)
  return (
    <div className='bg-[#64A6BD] p-4'>
        <div className='max-w-[1240px] py-[30px] items-center border flex justify-between border-black mx-auto'>
            <div className='text-3xl text-[#272838] font-bold'>
                WsCube Tech
            </div>
           { toggle ?
            <AiOutlineClose onClick={()=>setToggle(!toggle)} className='md:hidden block text-[#e4fde1] text-3xl' />
            :
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='md:hidden block text-[#e4fde1] text-3xl' />
            }
            <ul className='hidden md:flex text-[#e4fde1] gap-5'>
                <li>Home</li>
                <li>Company</li>
                <li>Resources</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
            {/* Responsive */}
            <ul className= {`duration-300 md:hidden w-full h-screen  text-[#EBEBEB] fixed bg-[#58A4B0] top-[180px] ${toggle?'left-[-55%]':'left-[-100%]'}`} >
                <li className='p-2 ml-[60%]'>Home</li>
                <li className='p-2 ml-[60%]'>Company</li>
                <li className='p-2 ml-[60%]'>Resources</li>
                <li className='p-2 ml-[60%]'>About</li>
                <li className='p-2 ml-[60%]'>Contacts</li>
            </ul>
        </div>
    </div>
  )
}

export default Header
