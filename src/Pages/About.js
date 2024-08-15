import React from 'react'
import Navbar from './Navbar'
import { HiOutlineMail } from "react-icons/hi";
import { FaDotCircle, FaGreaterThan, FaHeadset, FaLocationArrow, FaPhoneAlt, FaSearch } from "react-icons/fa";
import {  FaLocationCrosshairs, FaTelegram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import Footer from './Footer';

const About = () => {
  return (
    <div>
      <Navbar/>

      <div>
      <div className='jojo md:h-[200px] p-5 flex items-center'>
      <p className='flex items-center gap-2 mt-3 md:text-4xl text-2xl uppercase font-bold text-white'><FaDotCircle className='md:text-xl'/> About Us</p>
      </div>

      <div className='md:flex md:pt-20 pt-10 mt-2 px-2 md:px-10 md:text-base text-sm'>
      <section className='md:w-[50%]'>
            <p>
            We ensure the safe delivery of packages is my top priority.
             We take every possible measure to ensure that the packages we deliver arrive at their destination safely and intact.
             To achieve 100% safe delivery, we use high-quality packaging materials to protect the items from damage during transit.
            </p>
            <p className='mt-2 md:mt-3'>
            we understand that weather can be a significant factor in the safe and timely delivery of shipments.
             Even with careful planning, unexpected weather events can impact delivery schedules and potentially cause damage to shipments. 
            To address this issue, we offer weather insurance as an additional option to our clients.
            </p>

            <div className='mt-14'>
            <FaGlobe className='text-5xl text-[#0C1B2E]'/>
            <p className='text-xl font-bold mt-2'>Global Coverage</p>
            <p>Worldwide shipping facilitates the transportation of goods acreoss borders and oceans, offering business a global reach.</p>
            </div>
            <div className='mt-10'>
            <TbTruckDelivery className='text-5xl text-[#0C1B2E]'/>
            <p className='text-xl font-bold mt-2'>On Time Delivery</p>
            <p>We take every possible measure to ensure that the packages we deliver arrive at their destination safely and intact.</p>
            </div>
        </section>
        <section className='md:w-[50%] w-full md:mt-0 mt-10 flex justify-center'>
<img src="https://static.wixstatic.com/media/ea26fd_91738f59b8cb40769316e5cd632c34d5~mv2_d_6720_4480_s_4_2.jpeg/v1/fill/w_1264,h_1008,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea26fd_91738f59b8cb40769316e5cd632c34d5~mv2_d_6720_4480_s_4_2.jpeg" alt=""  className='w-[80%] border-r-8 border-t-8 border-[#0C1B2E]'/>
        </section>
    </div>

    <div className='mt-24'>
        <p className='text-center text-lg font-bold'>Testimonial</p>
        <p className='md:text-5xl text-2xl text-center font-semibold'>Our Clients Say!</p>
        <div className='md:mt-10 mt-5 grid md:grid-cols-3 gap-2 md:gap-5 px-2 md:px-20'>
            <section className=' p-5 border-black border-2'>
<div className='flex items-end'>
    <img src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/testimonial-4.jpg" className="w-[100px] h-[100px]" alt="" />
    <section className='ml-3'>
        <p className=' font-extrabold uppercase'>Ruth Stef</p>
        <p className='font-medium'>Fashon Designer</p>
    </section>
</div>
<p className='mt-7 text-sm'>
I recently used this shipping company to send a package overseas, and I was impressed by their competitive rates and exceptional service. My package arrived on time and without any issues. I would definitely use their services again
</p>
            </section>

            <section className=' p-5 border-black border-2'>
<div className='flex items-end'>
    <img src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/testimonial-2.jpg" className="w-[100px] h-[100px]" alt="" />
    <section className='ml-3'>
        <p className=' font-extrabold uppercase'>Williams Alex</p>
        <p className='font-medium'>Real Estate Consultant</p>
    </section>
</div>
<p className='mt-7 text-sm'>
If you're looking for a shipping company that will handle your packages with care and get them to their destination on time, then look no further. This shipping company exceeded my expectations and provided outstanding service. Thank you!
</p>
            </section>

            <section className=' p-5 border-black border-2'>
<div className='flex items-end'>
    <img src="https://demo.htmlcodex.com/2202/shipping-company-website-template/img/testimonial-3.jpg" className="w-[100px] h-[100px]" alt="" />
    <section className='ml-3'>
        <p className=' font-extrabold uppercase'>Samuel kelvin</p>
        <p className='font-medium'>Web Developer & programmer</p>
    </section>
</div>
<p className='mt-7 text-sm'>
I've been using this shipping company for a while now, and I must say, they never disappoint. Their staff are always friendly, and they take great care of my packages. I would recommend them to anyone looking for a reliable shipping service.
</p>
            </section>


        </div>
      </div>
      <Footer/>
      </div>
    </div>
  )
}

export default About
