import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaDotCircle, FaGreaterThan, FaHeadset, FaLocationArrow, FaPhoneAlt, FaSearch } from "react-icons/fa";
import {  FaLocationCrosshairs, FaTelegram } from "react-icons/fa6";


const Footer = () => {
  return (
    <div> <footer className='md:mt-40 mt-20 md:px-10 px-5 bbb bg-[#0C1B2E] text-white'>
    <div className='grid md:grid-cols-3 md:text-lg text-sm font-medium md:py-10'>
        <section>
            <p className='md:text-2xl text-xl text-[#c11425] font-bold mb-2 md:mb-5 mt-5 md:mt-0'>Address</p>
            <p className='flex gap-2'><FaLocationCrosshairs/>34 isla Drive, Lubbesthorpe, Leicester, England, LE19 4BN</p>
            <p className='flex items-center gap-2 mt-3'><HiOutlineMail/>info@globalshipwave.com</p>
        </section>
        <section>
        <p className='md:text-2xl text-xl text-[#c11425] font-bold mb-2 md:mb-5 mt-5 md:mt-0'>Services</p>
            <p className='flex items-center gap-2'><FaDotCircle/> Air Freight</p>
            <p className='flex items-center gap-2 mt-3'><FaDotCircle/> Sea Freight</p>
            <p className='flex items-center gap-2 mt-3'><FaDotCircle/> Road Freight</p>
            <p className='flex items-center gap-2 mt-3'><FaDotCircle/> Courier Freight</p>
        </section>
        <section>
        <p className='md:text-2xl text-xl text-[#c11425] font-bold mb-2 md:mb-5 mt-5 md:mt-0'>Newsletter</p>
        <p>Be the first to know about new services, special promotions, and exclusive offers tailored to your logistics need. 
            Join our mailing list and stay connected with the latest development in the world of logistics!</p>
            <form action="" className='mt-2 md:flex text-black'>
        <input type="email" required placeholder='Your Email' className='outline-none border-none md:w-[70%] w-full text-black h-[50px] px-3'/>
        <button className='md:w-[30%] bg-[#c11425] mb-2 md:mb-0 w-full md:mt-0 mt-2 md:py-0 py-2 font-bold text-white border-4 border-white'>
            Submit
        </button>
    </form>
        </section>
    </div>
          </footer></div>
  )
}

export default Footer