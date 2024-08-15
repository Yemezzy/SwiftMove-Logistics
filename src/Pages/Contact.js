import React from 'react'
import Navbar from './Navbar'
import { FaDotCircle } from 'react-icons/fa'
import Footer from './Footer'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <div>
      <div className='jojo md:h-[200px] p-5 flex items-center'>
      <p className='flex items-center gap-2 mt-3 md:text-4xl text-2xl uppercase font-bold text-white'><FaDotCircle className='md:text-xl'/> Contact Us</p>
      </div>

      <div className='md:px-20 px-5 mt-20 flex justify-center'>
      <section className='bg-[#0C1B2E] md:p-5 p-2 md:w-[70%]'>
<form action="">
    <div className='md:flex gap-2'>
        <input type="text" required placeholder='Your Name' className='px-2 h-[50px] md:w-[50%] w-full outline-none border-none'/>
        <input type="text" required placeholder='Your Email'  className='px-2 md:mt-0 mt-2 h-[50px] md:w-[50%] w-full outline-none border-none'/>
    </div>
    <div className='md:flex gap-2 md:mt-5 mt-2'>
        <input type="text" required placeholder='Your Phone No'  className='px-2  h-[50px] md:w-[50%] w-full outline-none border-none'/>
        <select name="" required  id="" className='px-2 h-[50px] md:w-[50%] w-full mt-2 md:mt-0 outline-none border-none'>
            <option value="">Select a Freight</option>
            <option value="">Air Freight</option>
            <option value="">Sea Freight</option>
            <option value="">Road Freight</option>
        </select>
    </div>
    <textarea placeholder='Write A Note' className='p-2 h-[70px] md:mt-5 mt-2 w-[100%] outline-none border-none'/>
    <button className=' h-[50px] mt-5 w-[100%] outline-none text-white font-bold border-none bg-[#c11425]'>Submit</button>
</form>
            </section>
      </div>

      <Footer/>
      </div>
    </div>
  )
}

export default Contact
