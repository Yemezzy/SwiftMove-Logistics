import React, { useState } from 'react'
import { FaDotCircle, FaGreaterThan, FaHeadset, FaLocationArrow, FaPhoneAlt, FaSearch } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
    const [track, setTrack] = useState("")
    const item1 = "44940494"
    const [error, setError] = useState("")
    const show = (event) => { 
   
        if (track === item1) {
            setTimeout(() => {
                window.location.href = "/about-us"
            }, 2000);  
        }else{
            setTimeout(() => {               
                setError("Incorrect user tracking ID")
            }, 1000);
        }
      };


  return (
    <div>
    
    <Navbar/>

      <div className='jojo md:h-[670px] p-5'>
<section className='md:w-[60%] w-full text-white'>
<p className='md:mt-36 mt-10 md:text-7xl text-4xl font-bold text-white'>SwiftMove Global Logistic Service </p>
<p className='md:mt-5 mt-2 md:text-xl '>
SwiftMove Logistics
We have been operating for over a decade, providing top-notch services to 
our clients and building a strong track record in the industry.
</p>
<div className='mt-10 md:flex text-black bg-[#c11425] p-2'>
    <input type="text" value={track} onChange={(event)=> setTrack(event.target.value)}  required placeholder='Your Tracking ID' className='outline-none border-none md:w-[70%] w-full text-black h-[50px] px-3'/>
    <button onClick={show} className='md:w-[30%] w-full md:mt-0 mt-2 md:py-0 py-2 font-bold text-white border-4 border-white'>
        TRACK & TRACE
    </button>
</div>
    <p className='mt-2 text-red-500 text-center uppercase'>{error}</p>
</section>
      </div>


      <div className='md:mt-20 px-5'>
<div className='mt:pt-20 mt-10'>
    <p className='text-3xl text-center md:text-left font-bold'>ABOUT US</p>
    <div className='md:flex md:mt-5 mt-2 md:text-base text-sm'>
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
</div>
      </div>

      <div className='md:mt-20'>
        <div className='pt-20'>
<p className='text-center  md:text-4xl text-2xl font-semibold'>Our Awesome Services</p>
<div className='md:px-20 px-5 text-white grid md:grid-cols-3 mt-2 md:mt-5 gap-3'>
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

      <div className='mt-24'>
        <div className='md:px-20 px-5 md:pt-20 grid md:grid-cols-2 gap-5 md:gap-0'>
            <section>
                <p className='text-[#c11425] text-xl font-bold'>Get A Quote</p>
              <p className='md:text-4xl text-2xl font-semibold md:mt-3'>
                Request A Free Qoute!
              </p>
              <p className='md:mt-10 mt-3 md:pr-10 '>
              Experience the difference with Our exclusive shippement services. Let us handle your logistics, so you can focus on what you do best
              </p>
              <div className='md:mt-10 mt-5 flex items-end gap-5'>
                <FaHeadset className='text-7xl text-white p-4 bg-[#c11425]'/>
                <div>
                    <p className='font-semibold'>Email for any query!</p>
                    <p className='text-2xl font-bold text-[#c11425]'>info@globalshipwave.com</p>
                </div>
              </div>
            </section>
            <section className='bg-[#0C1B2E] md:p-5 p-2'>
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
      </div>

     <Footer/>
    </div>
  )
}

export default Home
