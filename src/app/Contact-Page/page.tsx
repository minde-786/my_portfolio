'use client';
import React from 'react'
import { useForm, } from "react-hook-form"

type FormData = {
  Fullname: string;
  phone: number;
  email: string;
  subject: string;
  Message: string;
};
const Page = () => {

    const {
    register,
    handleSubmit,
    
    formState: { errors,isSubmitting },}=useForm<FormData>();
 async function onSubmit(data:FormData){
  await new Promise((resolve) => setTimeout(resolve,5000));
console.log('Submitting the form', data)
}

  return (
    <form  onSubmit={handleSubmit(onSubmit)}><div >
      <div className='text-4xl font-bold text-center text-amber-50 mb-12 pb-5 py-3 shadow-lg hover:shadow-2xl '>Contact Me📞</div> 
      <div className='grid grid-cols-1 text-center lg:mx-80'>
   <input
         type='text'
        placeholder='Enter your Name '{...register("Fullname", { required: ' Subject is required.',  minLength:{value:3,
            message: "Name must be at least 3 characters"} ,
            maxLength:25 }
          )
        }
     
         className=' bg-[#040e1a] rounded-2xl border border-slate-800 shadow-lg
          hover:shadow-2xl p-3 m-4 lg:px-48 text-amber-50  '></input>
             {errors.Fullname && <p className='text-red-500 text-sm text-left'>{errors.Fullname.message}</p>}
         
         
<input
         type='text'
        placeholder='Enter your phone' {...register("phone", { required:  ' Subject is required.',

      pattern: {
      value: /^[0-9]+$/,
      message: "Only numbers are allowed",
          
          } ,         
           minLength:{value:11,
            message: "invalid phone Number",} ,

           maxLength:{value:11,
            message: "invalid phone Number",} ,
          }

            
          )
        }
     
         className=' bg-[#040e1a] rounded-2xl border border-slate-800 shadow-lg
          hover:shadow-2xl p-3 m-4 text-amber-50 lg:px-48 '></input>
             {errors.phone && <p className='text-red-500 text-sm text-left'>{errors.phone.message}</p>}
         
         
<input
          type='text'
         placeholder='Enter your EMail Address'  {...register("email", { required:  ' Subject is required.', 
          pattern: {
         value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
         message: "Invalid email format",
  }
           } )
        }
     
         className=' bg-[#040e1a] rounded-2xl border border-slate-800 shadow-lg
          hover:shadow-2xl p-3 m-4 text-amber-50 lg:px-48'></input>
             {errors.email && <p className='text-red-500 text-sm text-left'>{errors.email.message}</p>}
        
        
 <input
          type='text'
        placeholder='Enter your Mail Subject  ' {...register("subject", { required:  ' Subject is required.', maxLength:{value:100,
            message: "Message must be at most 100 characters"} }
            
          )
        }
     
         className=' bg-[#040e1a] rounded-2xl border border-slate-800 shadow-lg
          hover:shadow-2xl p-3 m-4 text-amber-50 lg:px-48 '></input>
             {errors.Message && <p className='text-red-500 text-sm text-left'>{errors.Message.message}</p>}
        
        
<input
          type='text'
        placeholder=' your Message '  {...register("Message" , 
          { required:  ' Subject is required.',
             minLength:{value:10,
            message: "Message must be at least 10 characters"} ,
             }
          )
        }
     
         className=' bg-[#040e1a] rounded-2xl border border-slate-800 shadow-lg
          hover:shadow-2xl p-3 m-4 text-amber-50 lg:px-48'></input>
             {errors.Message && <p className='text-red-500 text-sm text-left'>{errors.Message.message}</p>}
      </div>
     <div className='text-center mt-4'>
        <button
          type='submit' 
          disabled={isSubmitting} 
          
          className='bg-[#051850] rounded-2xl border border-slate-800 shadow-lg hover:shadow-2xl px-12 py-2 mt-14 text-amber-50 lg:mx-96 hover:text-blue-600'
        >
          {isSubmitting ? "submitting" : "submit"}
          
        </button>
    </div> </div></form>
  )
}

export default Page
