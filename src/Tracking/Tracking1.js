import React from 'react'
import {  FaBars, FaLocationCrosshairs, FaTelegram } from "react-icons/fa6";
import { FaDotCircle, FaFacebook, FaHamburger } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Navbar from '../Pages/Navbar';

const Tracking1 = () => {
  return (
    <div>
        
        <Navbar/>
        <div className='jojo md:h-[200px] p-5 flex items-center'>
      <p className='flex items-center gap-2 mt-3 md:text-4xl text-2xl uppercase font-bold text-white'><FaDotCircle className='md:text-xl'/> Track & Trace</p>
      </div>
    </div>
  )
}

export default Tracking1