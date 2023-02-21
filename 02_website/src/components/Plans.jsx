import React from 'react'

function Plans() {
  return (
    <div className='max-w-[1240px] p-2 mx-auto height-[350px] mt-3 bg-[#F5F4F6]  md:grid grid-cols-3 gap-6'>

      <div className='rounded shadow-xl h-[500px] my-3 hover:scale-105 duration-400 bg-slate-200 flex flex-col justify-center text-center text-[#203D46] '>
        <h3 className='font-bold text-[40px] '>Web Development</h3>
        <h1 className='font-bold text-[50px] '>$99</h1><br></br>
        <p>ML is evolving</p>
        <p>you can learn it in a better way from our experts.</p>
        <p>you can take 2 days free trial.</p>
        <button className='bg-[#4F7CAC] align-center w-[7rem] mx-auto hover:bg-[#476F9A] delay-300 text-white px-3 py-1 rounded text-[35px] mt-1 md:mt-6 font-thin ' >Free trial</button>
      </div>

      <div className='rounded shadow-xl h-[500px] my-3 hover:scale-105 duration-400 bg-slate-200 flex flex-col justify-center text-center text-[#011319]'>
        <h3 className='font-bold text-[40px] '>Machine Learning</h3>
        <h1 className='font-bold text-[50px] '>$149</h1><br></br>
        <p>ML is evolving</p>
        <p>you can learn it in a better way from our experts.</p>
        <p>you can take 2 days free trial.</p>
        <button className='bg-[#4F7CAC] align-center w-[7rem] mx-auto hover:bg-[#476F9A] delay-300 text-white px-3 py-1 rounded text-[35px] mt-1 md:mt-6 font-thin ' >Free trial</button>
      </div>

      <div className='rounded shadow-xl h-[500px] my-3 hover:scale-105 duration-400 bg-slate-200 flex flex-col justify-center text-center text-[#203D46] '>
        <h3 className='font-bold text-[40px] '>Project Management</h3>
        <h1 className='font-bold text-[50px] '>$81</h1><br></br>
        <p>ML is evolving</p>
        <p>you can learn it in a better way from our experts.</p>
        <p>you can take 2 days free trial.</p>
        <button className='bg-[#4F7CAC] align-center w-[7rem] mx-auto hover:bg-[#476F9A] delay-300 text-white px-3 py-1 rounded text-[35px] mt-1 md:mt-6 font-thin ' >Free trial</button>
      </div>
    </div>
  )
}

export default Plans
