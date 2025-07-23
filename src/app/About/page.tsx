import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className=''>
      <h1 className='text-white text-4xl text-center font-bold mt-6 py-6  shadow-lg hover:shadow-2xl '>
        👨‍💻 About Me
      </h1><hr/>
<div className='lg:grid grid-cols-2 mt-2'>
  <div className=' bg-[#040e1a] mt-4 text-white p-4 max-w-3xl mx-4 text-justify leading-relaxed rounded-lg shadow-lg hover:shadow-2xl'>
Hi! I &rsquo;m a passionate and curious full-stack developer 
exploring the frontiers of modern web and AI technologies.
 My core skills revolve around <span className='text-shadow-gray-100 font-bold text-2xl text-'> Next.js</span> {' '}and{' '}
  <span className='text-gray-100 font-bold text-2xl text-'>React</span>{' '}
 but I’m also learning <span className='text-gray-100 font-bold text-2xl text-'> Python</span>{' '}and{' '}<span className='text-gray-100 font-bold text-2xl text-'>Agentic AI </span>{' '}
 to stay ahead in the evolving tech landscape.

My coding journey started with front-end development, but over time,
 I &rsquo;ve expanded into backend systems, automation, and now intelligent agents 
 that can act with autonomy. I'm especially excited about how Agentic AI
  is reshaping productivity and decision-making.

      </div>
    <div className=" bg-[#040e1a] mt-4 max-w-md mx-auto p-6  shadow-lg rounded-lg hover:shadow-2xl ">
  <h2 className="text-2xl font-bold text-white mb-2">My Professional Skills</h2>
  <p className="text-sm text-gray-400 mb-6">
   Turning ideas into powerful web apps with Next.js and React — now diving  Agentic AI to shape the future of intelligent tech.
  </p>

 
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-100 text-sm">Next.js</span>
      <span className="text-gray-100 text-sm">80%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-500 h-2 rounded-full"
        style={{ width: '80%' }}
      ></div>
    </div>
  </div>


  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-gray-100 text-sm">Python</span>
      <span className="text-gray-100 text-sm">70%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-500 h-2 rounded-full"
        style={{ width: '70%' }}
      ></div>
    </div>
  </div>

 
  <div className="mb-2">
    <div className="flex justify-between mb-1">
      <span className="text-gray-100 text-sm">Agentic AI</span>
      <span className="text-gray-100 text-sm">50%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-500 h-2 rounded-full"
        style={{ width: '50%' }}
      ></div>
    </div>
  </div>
</div>


</div>
<div className='text-slate-300 text-center m-14 bg-[#0a1b31] shadow-lg hover:shadow-2xl p-4 rounded-lg border border-slate-800  '>
  📩 Let’s build something together! You can reach me at 👉 <span className='hover:text-blue-700 font-thin text-slate-200'> 
    
    <Link href="mailto:Muntazir3637@email.com" target="_blank"> Muntazir3637@email.com </Link> </span> or <span className='hover:text-blue-700 font-thin text-slate-200'>
       <Link href="https://github.com/minde-786" target="_blank"> GitHub👩‍💻 </Link></span>
</div>


    </div>
  )
}

export default page
 