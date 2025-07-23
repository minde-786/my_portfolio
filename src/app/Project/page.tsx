
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <div>
      <h1 className='text-center text-white text-3xl py-3 font-bold mt-3 shadow-lg hover:shadow-2xl'>Projects 📁</h1>
    <div className='md:grid grid-cols-2 mt-4'>
     {[
      {
         title: "🚗 Car Rental E‑Commerce Website",
      discription:"A fully responsive car rental platform built with modern web technologies. Users can browse available cars, check pricing, make bookings, and manage reservations — all through a clean, user-friendly interface",
      image:"/a (1).png",
      link:'https://github.com/minde-786/Car-Rent'
    },
      {
        title:"📏 Unit Converter Web App",
        discription:"A lightweight and responsive unit converter built to seamlessly switch between metric and imperial units. Supports conversions for length, weight, temperature, and more — with real-time results and clean UI.",
      image:"/a (2).png",
      link:'https://github.com/minde-786/Unit_convertor'
    },
       {
        title:"🏧 ATM Machine Simulation",
        discription:"An interactive ATM simulation that allows users to perform basic banking operations like balance inquiry, cash withdrawal, deposit, and PIN verification. Designed with user-friendly UI and real-world logic flow.",
      image:"/a (3).png",
      link:'https://github.com/minde-786/ATM--machine'
    },
       {
        title:"🚘 PakWheels Clone – Car Listing Demo Website",
        discription:"A feature-rich demo website inspired by PakWheels,enabling users to browse, search, and post used cars for sale. Includes filtering by brand, model, price range, and location — with smooth, responsive UI.",
      image:"/a (4).png",
      link:'https://github.com/minde-786/pak_wheels'
    },
       {
        title:"my-Portfolio ",
        discription:"A fully responsive and modern portfolio website showcasing my skills, projects, and achievements. Built with Next.js, Tailwind CSS, and smooth animations to ensure a clean, user-friendly experience on all devices.",
     image:"/ha.png",
      link:''
     },
       {
        title:"🔐 Password Strength Checker",
        discription:"The Password Strength Checker is a web-based tool designed to help users create strong, secure passwords by providing real-time feedback based on password complexity.",
     image:"/ha.png",
     link:"https://github.com/minde-786/password_strength-checker"
     }
     ] .map((project,index)=>(
<div  key={index}
  className=' bg-[#040e1a] border border-slate-800 shadow-lg hover:shadow-2xl py-4 m-10 rounded-2xl transition-all duration-300 '>
<h1 className='text-center text-white text-2xl font-sans transition-shadow'>{project.title}

</h1>
<Image
 src={project.image}
      alt={project.title}
       width={300} height={200} className='rounded-lg shadow-lg mt-4 lg:mx-20 h-20 w-40 lg:h-[200px] lg:w-[300px] ml-12 md:ml-18 lg:ml-15 '/>
       <a href={project.link }
       target='blank'
       > <p className='text-amber-100 italic tracking-wide text-sm text-center lg:p-2 p-0.5 px-1 lg:ml-36 bg-indigo-950 mt-2 lg:mr-52 mr-14 ml-14 rounded-2xl hover:text-indigo-500'>🔗 View Code on GitHub </p>
       </a>
<p className='text-slate-300 p-4 text-justify'>{project.discription}

</p>
</div>
     )

     )
      }
    </div>
    <div className='text-center text-sm font-serif text-slate-300 '>Every project reflects my learning journey and my passion for building useful, real-world solutions.</div>
 </div> )
}

export default page
