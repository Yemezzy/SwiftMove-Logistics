import React from 'react'
import {  FaBars, FaLandmark, FaLocationCrosshairs, FaTelegram } from "react-icons/fa6";
import { FaDotCircle, FaFacebook, FaHamburger } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Navbar from '../Pages/Navbar';
import Footer from '../Pages/Footer';

const Tracking1 = () => {
  return (
    <div>
        
        <Navbar/>
        <div className='jojo md:h-[150px] p-5 flex items-center'>
      <p className='flex items-center gap-2 mt-3 md:text-4xl text-2xl uppercase font-bold text-white'><FaDotCircle className='md:text-xl'/> Track & Trace</p>
      </div>
      <div className='p-5'>
        <p>Tracking Number:</p>
        <p className='text-sm underline font-bold'>GSW44940494-50509ID</p>
<div className='md:px-20'>
<div className='grid md:grid-cols-2 md:gap-2'>
            <section className='border-2 border-black p-3 mt-2 md:mt-10'>
<p className='text-xl font-bold uppercase md:mt-5'>Shipper Information</p>
<div className='md:mt-10 mt-5'>
<p><b>Name: </b>Steve Wesley</p>
<p><b>Address: </b>South Carolina.</p>
<p><b>Email: </b> <a href="mailto:stevewesley37@gmail.com">stevewesley37@gmail.com</a></p>
</div>
            </section>

            <section className='border-2 border-black p-3 mt-2 md:mt-10'>
<p className='text-xl font-bold uppercase mt- md:mt-5'>Receiver Information</p>
<div className='md:mt-10 mt-5'>
<p><b>Name: </b>Judi Warman</p>
<p><b>Address: </b>1018 Sweet Amy Way Sellersburg, IN 47172.</p>
<p><b>Email: </b> <a href="mailto:jwarm1284@gmail.com">jwarm1284@gmail.com</a></p>
</div>
            </section>
        </div>
        <section className='py-2 bg-[#0C1B2E] mt-2 md:mt-5 rounded-md'>
            <p className=' text-white text-center'>SHIPMENT STATUS - Pending</p>
        </section>
</div>


<div>
        <p className='text-lg font-bold underline md:mt-10 mt-5'>Tracking Route:</p>
<div>

<div className='flex items-center gap-3 text-lg md:text-2xl mt-10 font-extrabold'>
            <FaLandmark className='text-2xl'/>
            <p>Shipping label created, awaiting item</p>
        </div>
        <div className='md:h-[150px] h-[100px] border-l-4 border-dotted border-black md:p-2 px-2 md:px-7 ml-2 md:mt-1 mt-5'>
<p className='font-normal'>al-Tanf, Syria.</p>
<p className='font-normal'>August 19, 2024, 04:30pm.</p>
        </div>
</div>


<div>

<div className='flex items-center gap-3 text-lg md:text-2xl font-extrabold'>
            <FaLandmark className='text-2xl'/>
            <p>Received by shipping partner, GlobalShipWave awaiting item.</p>
        </div>
        <div className='md:h-[150px] h-[100px] border-l-4 border-dotted border-black p-2 px-2 md:px-7 ml-2 mt-1'>
<p className='font-normal'>al-Tanf, Syria.</p>
<p className='font-normal'>August 20, 2024, 09:00am.</p>
        </div>
</div>


<div>

<div className='flex items-center gap-3 text-lg md:text-2xl font-extrabold'>
            <FaLandmark className='text-2xl'/>
            <p>Departed by shipping partner, GlobalShipWave awaiting item.</p>
        </div>
        <div className='md:h-[150px] h-[100px] border-l-4 border-dotted border-black p-2 px-2 md:px-7 ml-2 mt-1'>
<p className='font-normal'>al-Tanf, Syria.</p>
<p className='font-normal'>August 21, 2024, 02:00pm.</p>
        </div>
</div>
      </div>
      </div>

<Footer/>
    </div>
  )
}

export default Tracking1