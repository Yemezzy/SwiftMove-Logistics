import React from 'react'
import Navbar from './Navbar'
import { FaDotCircle, FaGreaterThan, FaHeadset, FaLocationArrow, FaPhoneAlt, FaSearch } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import Footer from './Footer';

const Services = () => {
  return (
    <div>
      <Navbar/>
      <div>
      <div className='jojo md:h-[200px] p-5 flex items-center'>
      <p className='flex items-center gap-2 mt-3 md:text-4xl text-2xl uppercase font-bold text-white'><FaDotCircle className='md:text-xl'/> Services</p>
      </div>

      <div className='md:mt-20'>
        <div className=''>
<div className='md:px-10 px-2 text-white grid md:grid-cols-3 mt-2 md:mt-5 gap-3'>
<section className='flex items-end  h-[250px] sec1'>
<p className='p-2 text-xl text-center font-bold bg-[#c11425] w-full'>Air Freight</p>
</section>
<section className='flex items-end h-[250px] sec2'>
<p className='p-2 text-xl text-center font-bold bg-[#c11425] w-full'>Sea Freight</p>
</section>
<section className='flex items-end justify-center  h-[250px] sec3'>
<p className='p-2 text-xl text-center font-bold bg-[#c11425] w-full'>Road Freight</p>
</section>
<section className='flex items-end justify-center h-[250px] sec4'>
<p className='p-2 text-xl text-center font-bold bg-[#c11425] w-full'>Courier Freight</p>
</section>
<section className='flex items-end justify-center h-[250px] sec5'>
<p className='p-2 text-xl text-center font-bold bg-[#c11425] w-full'>Fast Freight</p>
</section>
<section className='flex items-end justify-center h-[250px] sec6'>
<p className='p-2 text-xl text-center font-bold bg-[#c11425] w-full'>Track Cargo</p>
</section>
</div>
        </div>
      </div>

      <div className='mmm mt-20 md:h-[600px]'>
<div className='fff md:h-[600px] grid md:grid-cols-2'>
    <section className='md:h-[450px] h-[300px] lolo bg-[#0C1B2E] flex justify-center items-center'>
   <div className='text-center text-[#c11425]'>
    <section className='flex justify-center'>
    <TbTruckDelivery className='md:text-7xl text-5xl text-[#c11425]'/>
    </section>
   <p className='md:text-5xl text-2xl font-semibold'>Track Your Order</p>
   <p className='text-lg'>Enter your Track Id For Instant Search</p>
   <form action="" className='flex items-center border-b px-1 mt-5'>
    <input type="text" placeholder='TRACKING ID' className='w-full text-white text-lg mt-2 h-[50px] outline-none bg-transparent'/>
    <button><FaSearch className='text-lg'/></button>
   </form>
   {/* <div className='flex gap-3 justify-end mt-3'>
    <FaPhoneAlt/>
    <FaTelegram/>
   </div> */}
   </div>
    </section>
    <section className='bg-black text-white md:p-20 p-5 gap-5 grid grid-cols-2 md:h-[450px] h-[350px] opacity-70'>
<div className='text-center px-5'>
<p className='md:text-5xl text-xl text-center border-b-2 border-[#c11425] mb-2 pb-2'>60</p>
<p>Years Experience</p>
</div>
<div className='text-center px-5'>
<p className='md:text-5xl text-xl text-center border-b-2 border-[#c11425] mb-2 pb-2'>2500+</p>
<p>Professional Workers</p>
</div>
<div className='text-center px-5'>
<p className='md:text-5xl text-xl text-center border-b-2 border-[#c11425] mb-2 pb-2'>80%</p>
<p>Areas Covered</p>
</div>
<div className='text-center px-2 px-5'>
<p className='md:text-5xl text-xl text-center border-b-2 border-[#c11425] mb-2 pb-2'>205+</p>
<p>Countries Covered</p>
</div>
<div className='text-center px-5'>
<p className='md:text-5xl text-xl text-center border-b-2 border-[#c11425] mb-2 pb-2'>180+</p>
<p>Corporate Clients</p>
</div>
<div className='text-center px-5'>
<p className='md:text-5xl text-xl text-center border-b-2 border-[#c11425] mb-2 pb-2'>450+</p>
<p>Owned Vehicles</p>
</div>
    </section>
</div>
      </div>

      <Footer/>
      </div>
    </div>
  )
}

export default Services
