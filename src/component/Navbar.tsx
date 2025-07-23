import React from "react";
import Link from "next/link";
const Navbar=()=>{
    return(
  <>  <div className="md:flex justify-between px-4 border-b-black text-amber-50 shadow-lg hover:shadow-2xl   ">
          <h1 className="lg:px-8 text-white font-bold text-4xl py-2">
          Portfolio   
            </h1>  
            <h2 className="md:flex justify-around  gap-24  lg:py-6 py-9 lg:mx-6">
           
            <p className="hover:text-gray-400"><Link href="/About">About</Link></p>
             <p className="hover:text-gray-400"><Link href="/Services">Services</Link></p>
              <p className="hover:text-gray-400"><Link href="/Project">Project</Link></p>
               <p className="hover:text-gray-400"><Link href="/Contact-Page">Contact Me</Link></p>
             </h2>


          
        </div><hr className="  border border-slate-800  w-full" />  </>
    )
}
export default Navbar;