
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='text-center text-white text-3xl py-3 font-bold mt-3 shadow-lg hover:shadow-2xl'>Projects 📁</h1>
    <div className='md:grid grid-cols-2 mt-4'>
     {[
     
       {
        title:"Real-Time News Website",
        discription:"A fully functional news platform built with React, Next.js, and Tailwind CSS, integrated with APIs to deliver real-time updates. Focused on responsive UI, server-side rendering, and optimized performance for a seamless user experience.",
      
      link1:"https://github.com/minde-786/news-api.git",
     link2:"https://news-api-lake-nine.vercel.app/",
    },
       {
        title:"my-Portfolio ",
        discription:"A fully responsive and modern portfolio website showcasing my skills, projects, and achievements. Built with Next.js, Tailwind CSS, and smooth animations to ensure a clean, user-friendly experience on all devices.",
    
      link1:'https://github.com/minde-786/my_portfolio.git',
      link2:"https://my-portfolio-sand-nu-43.vercel.app/",
     },
     
{
        title:"Full-Stack CRUD Application",
        discription:"Developed a robust CRUD system using Next.js for the frontend, PHP APIs for the backend, and MySQL as the database. This project highlights my expertise in full-stack development and efficient database integration",
    
     link1:"https://lnkd.in/e5SK2K7i",
     link2:"https://www.linkedin.com/posts/muntazir-mehdi-5aa2462ba_nextjs-php-mysql-activity-7361776076932456450-th_Z?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEyQ59IBd7W-jRTYHnhC81qE8g97nl0XZNw",
     },
     {
        title:"Dynamic Calculator App",
        discription:"An interactive calculator built with React.js, Next.js, and Tailwind CSS. It performs all arithmetic operations, percentage logic, and provides real-time updates with a fully responsive, clean, and intuitive design.",
    
     link1:" https://github.com/minde-786/Dynamic-calculator-",
     link2:"https://dynamic-calculator-ten.vercel.app/",
     },
     {
        title:"Interactive To-Do List",
        discription:"A feature-rich to-do list application built with Next.js and React. Users can add, update, and delete tasks with real-time UI updates, ensuring a smooth and engaging experience.",
    
     link1:"https://github.com/minde-786/To_Do_List",
     link2:" https://to-do-list-roan-nine-26.vercel.app/",
     },
     
     {
        title:"Mini E-Commerce Website",
        discription:"A fully functional e-commerce application built with React.js, Tailwind CSS, and Sanity.io as the headless CMS. It includes product listing, cart, and checkout features with a modern responsive UI, showcasing my ability to integrate frontend with CMS and deliver a seamless shopping experience.",
    
     link1:" https://github.com/minde-786/e-commerce.git",
     link2:"https://e-commerce-786.vercel.app",
     },
 {
         title: "🚗 Car Rental E‑Commerce Website",
      discription:"A fully responsive car rental platform built with modern web technologies. Users can browse available cars, check pricing, make bookings, and manage reservations — all through a clean, user-friendly interface",
      
      link1:'https://github.com/minde-786/Car-Rent',
      link2:"https://car-rent-virid-beta.vercel.app/",
    },
      {
        title:"📏 Unit Converter Web App",
        discription:"A lightweight and responsive unit converter built to seamlessly switch between metric and imperial units. Supports conversions for length, weight, temperature, and more — with real-time results and clean UI.",
      
      link1:'https://github.com/minde-786/Unit_convertor',
      link2:"https://minde-786-unit-convertor-unitconter-2hfxhq.streamlit.app/",
    },
       {
        title:"🏧 ATM Machine Simulation",
        discription:"An interactive ATM simulation that allows users to perform basic banking operations like balance inquiry, cash withdrawal, deposit, and PIN verification. Designed with user-friendly UI and real-world logic flow.",
      
      link:'https://github.com/minde-786/ATM--machine',
      link2:"",
    },
    {
        title:" 🔐 Password Strength Checker",
        discription:"This tool analyzes the strength of a password and guides users toward creating safer and more secure credentials. It was both a fun and educational experience that helped sharpen my logic-building and problem-solving skills.",
      link1:'https://github.com/minde-786/password_strength-checker',
      link2:"https://minde-786-password-strength-checker-pas-strenght-mgm4gb.streamlit.app/",
    },


     ] .map((project,index)=>(
<div  key={index}
  className=' bg-[#040e1a] border border-b-gray-800 py-4 m-10 rounded-2xl transition-all duration-300 flex flex-col justify-between hover:scale-110  hover:shadow-slate-900'>
<h1 className='text-center text-white text-2xl font-sans transition-shadow'>{project.title}

</h1> 
<p className='text-slate-300 p-4 text-justify'>{project.discription}

</p>

     <div className='flex justify-around'>
       <a href={project.link1 }
       target='blank'
       > 
       <p className='text-amber-100 italic tracking-wide text-sm text-center lg:p-2 p-0.5 px-1
        lg:ml-3 bg-indigo-950 mt-2 lg:mr-5 mr-14 ml-14 rounded-2xl hover:text-indigo-500'>
          🔗 View Code on GitHub </p>
       </a>

<a href={project.link2 }
       target='blank'
       > 
       <p className='text-amber-100 italic tracking-wide text-sm text-center 
       lg:p-2 p-0.5 px-1 lg:ml-3 bg-indigo-950 mt-2 lg:mr-5 mr-14 ml-14 rounded-2xl
        hover:text-indigo-500'>🔗 Explore on versel </p>
       </a>
</div></div>
     )

     )
      }
    </div>
    <div className='text-center text-sm font-serif text-slate-300 '>Every project reflects my learning journey and my passion for building useful, real-world solutions.</div>
 </div> )
}

export default page
