import React from 'react'
import { Link } from 'react-router-dom';
import {  FaLocationCrosshairs, FaTelegram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaDotCircle, FaGreaterThan, FaHeadset, FaLocationArrow, FaPhoneAlt, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
        <nav>
        <div className='text-sm p-2 md:px-10 px-3 bg-[#0C1B2E] w-full text-white flex justify-center md:justify-between'>
            <section className='flex justify-center gap-'> 
                <div className='flex gap-1 items-center border-r pr-3 md:pr-5'>
                <HiOutlineMail className='text-base'/>
                    <p>sara.cruz@example.com</p>
                    </div>

                <div className='flex gap-1 items-center md:px-5 px-3'>
                <FaPhoneAlt className='text-base'/>
                <p>+012 345 6789</p>
                </div>
            </section>
            <section className='md:flex hidden gap-'> 
                <div className='flex gap-1 items-center border-r pr-5'>
                <FaTelegram className='text-base'/>
                    <p>Telegram</p>
                    </div>

                <div className='flex gap-1 items-center px-5'>
                <FaFacebook className='text-base'/>
                <p>Facebook</p>
                </div>
            </section>
        </div>

        <div className='text- font-semibold flex justify-between items-center px-3 md:px-10 py-2'>
            <div className='flex-col flex items-center'>
            <img src="./img/Asset 1.png" alt="" className='md:w-20 w-[50px]'/>
            <p className='font-extrabold md:block  md:text-xs text-[5px]'>SwiftMove Logistics</p>
            </div>

            <ul className='md:flex hidden justify-between md:w-[30%]'>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/About-us">
                <li>About</li>
                </Link>
                <Link to="/Services">               
                <li>Services</li>
                </Link>
                <Link to="/Contact-us">
                <li>Contact Us</li>
                </Link>      
            </ul>

            <button className='bg-[#c11425] px-5 text-white text-sm py-2'>
                Track & Trace
            </button>
        </div>
      </nav>

    </div>
  )
}

export default Navbar
