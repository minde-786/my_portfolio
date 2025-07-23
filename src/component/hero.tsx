import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const page = () => {
  return (
   <div> <div className=' lg:grid grid-cols-2 h-110 '>
      <section className=" flex items-center justify-center lg:px-6 ">
  <div className="text-center lg:max-w-xl lg:mb-10">
    <h1 className="text-4xl font-bold mb-8 text-amber-50">
      Hi,  I&rsquo;m <span className="text-blue-600">Muntazir Mehdi</span>
    </h1>
    <p className="text-lg text-blue-400 mb-6">
      A passionate Full-Stack Developer crafting modern, responsive, and user-friendly web applications.
    </p>
    
  </div>
</section>
<div className='mx-12'>
  <Image 
  src="/img.png"
   alt="image" width={700} height={200} 
   className='  lg:py-6   border border-slate-800 rounded-full shadow-2xl lg:mt-9 lg:mb-9  md:ml-36  sm:0 mt-4 hover:shadow-2xl md:h-80 lg:h-100 lg:w-100 md:w-80' />
</div></div>



<div className=" text-center mt-14 md:mt-20 md:mr-10 lg:mt-0  ">
      <a
  href="/Muntazir-CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="border border-slate-700 text-blue-100 lg:mx-14 mx-4 lg:px-6 
  md: px-4 lg:py-2 rounded-2xl hover:bg-[#1f2834]  transition lg:mb-4 hover:shadow-2xl shadow-lg bg-[#051850] hover:text-blue-500 "
>
  View CV
</a>
      <Link href="/Contact-Page">
        <span className="border border-slate-700 text-blue-100 lg:mx-14 md:mx-4 lg:px-6 md: px-4 lg:py-2 rounded-2xl
         hover:bg-[#1f2834] transition lg:mb-4 hover:shadow-2xl bg-[#051850] shadow-2xl hover:text-blue-500">Hire Me</span>
      </Link>
    </div>
    </div> 
  )
}

export default page
