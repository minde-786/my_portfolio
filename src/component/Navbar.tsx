"use client"
import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useState } from 'react'
const Navbar=()=>{
     const [isOpen, setIsOpen] = useState(false);
    return(
      <div>
    <div className=" hidden md:flex justify-between px-4 border-b-black text-amber-50 shadow-lg hover:shadow-2xl   ">
          <h1 className=" lg:px-8 text-white font-bold text-4xl py-2">
          Portfolio   
            </h1>  
            <h2 className="md:flex justify-around  gap-24  lg:py-6 py-9 lg:mx-6">
           
            <p className="hover:text-gray-400"><Link href="/About">About</Link></p>
             <p className="hover:text-gray-400"><Link href="/Services">Services</Link></p>
              <p className="hover:text-gray-400"><Link href="/Project">Project</Link></p>
               <p className="hover:text-gray-400"><Link href="/Contact-Page">Contact Me</Link></p>
             </h2>


          
        </div>
        
        
        <div className="flex justify-around">
        
        
        
         
        
        
         <div className="md:hidden mt-2 flex gap-24">
          <div className=" lg:px-8 text-white font-bold text-4xl py-2">
          Portfolio   
            </div>  
        
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={24} className="bg-amber-50 rounded-3xl p-1 m-2"/> : < FaBars size={24} className="bg-amber-50 rounded-3xl p-1 m-2"/>}
          </button>
        </div>
      

      {/* Mobile Menu */}
      {isOpen && (
        <h2 className="md:flex justify-around  gap-24  lg:py-6 py-9 lg:mx-6 text-amber-50 bg-slate-700 shadow-lg hover:shadow-2xl hover:bg-amber-200 rounded p-2 m-2 mx-0">
           
            <p className="hover:text-gray-400"><Link href="/About">About</Link></p>
             <p className="hover:text-gray-400"><Link href="/Services">Services</Link></p>
              <p className="hover:text-gray-400"><Link href="/Project">Project</Link></p>
               <p className="hover:text-gray-400"><Link href="/Contact-Page">Contact Me</Link></p>
             </h2>

      )}
 
        
        
        
        
        
        </div>
        
        
        <hr className="  border border-slate-800  w-full" /></div>  
    )
}
export default Navbar;