import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

 

const page = () => {

  return (
   <div> <div className=' lg:grid grid-cols-2 h-min '>
      <section className=" flex items-center justify-center lg:px-6 ">
  <div className="text-center lg:max-w-xl lg:mb-10">
    <h1 className="text-4xl font-bold mb-8 text-amber-50 tracking-tight">
      Hi,  I&rsquo;m <span className="text-blue-600">Muntazir Mehdi</span>
    </h1>
    <p className="text-base sm:text-lg text-blue-300 mb-8 leading-relaxed max-w-lg mx-auto">
      A passionate Full-Stack Developer crafting modern, responsive, and user-friendly web applications.
    </p>
    <div className=" text-center mt-32 md:mt-20 md:mr-10">
      <a
  href="/Muntazir-CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-3 rounded-xl font-medium border border-slate-700 text-blue-100 
                bg-[#051850] hover:bg-[#051875] hover:text-blue-400 
                shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 lg:mx-14 md:mx-4"
>
  View CV
</a>
      <Link href="/Contact-Page">
        <span className="inline-block px-6 py-3 rounded-xl font-medium border border-slate-700 text-blue-100 
                bg-[#051850] hover:bg-[#051875] hover:text-blue-400 
                shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 lg:mx-14 md:mx-4">Hire Me</span>
      </Link>
    </div>
  </div>
</section>
<div className='mx-12'>
  
  <Image 
  src="/img.png"
   alt="image" width={700} height={200} 
   className='  lg:py-6   lg:mt-9 lg:mb-9 
    md:ml-36  sm:0 mt-4 hover:shadow-2xl md:h-80 lg:h-100 lg:w-100 md:w-80 
       w-72 h-72 bg-[#13315e]  border border-slate-800 rounded-full shadow-2xl  
      bottom-0 -right-10 hover:scale-105' />
</div></div>




    </div> 
  )
}

export default page
