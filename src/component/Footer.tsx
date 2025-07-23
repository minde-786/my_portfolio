import Link from 'next/link';
import React from 'react'
import { CiLinkedin } from 'react-icons/ci';
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
function Footer() {
  return (
    <div className=' mt-18 md:mt-24 bg-slate-900'><hr className="border border-slate-700  w-full shadow-lg hover:shadow-2xl " />
      <footer className=" md:flex justify-around text-white text-center py-4">
   <p className="text-xs text-gray-400 ">
      © 2025 Muntazir Mehdi. All rights reserved.
    </p>
  <div className='text-sm text-gray-400  '>Stay connected with me:<br/> 
  <div className='flex px-20'>
<Link href="https://www.linkedin.com/in/muntazir-mehdi-5aa2462ba/" target="_blank">  <CiLinkedin
              size={40}
              className="text-blue-800 rounded-lg hover:text-[#d6249f] h-10 px-2 mt-2" 
            /></Link>
            <Link href="https://www.instagram.com/mindi_o7/?hl=en" target="_blank">  <CiInstagram
              size={40}
              className="text-blue-800 rounded-lg hover:text-[#1877F2] h-10 px-2 mt-2" 
            />
            </Link>
              <Link href="https://www.facebook.com/profile.php?id=100064101377890" target="_blank">  <CiFacebook
              size={40}
              className="text-blue-800 rounded-lg hover:text-[#0A66C2] h-10 px-2 mt-2" 
            />
            </Link></div>
</div>
</footer>

    </div>
  )
}

export default Footer
