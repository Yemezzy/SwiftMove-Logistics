import React from 'react'
import { Link } from 'react-router-dom';
import {  FaBars, FaLocationCrosshairs, FaTelegram } from "react-icons/fa6";
import { FaFacebook, FaHamburger } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

const Navbar = () => {

    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    const handleClose = (event) => {
      if (anchorRef.current && anchorRef.current.contains(event.target)) {
        return;
      }
  
      setOpen(false);
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }

  return (
    <div>
        <nav>
        <div className='text-sm p-2 md:px-10 px-3 bg-[#0C1B2E] w-full text-white flex justify-center md:justify-between'>
            <section className='flex justify-center gap-'> 
                <div className='flex gap-1 md:text-base text-xs items-center pr-3 md:pr-5'>
                <HiOutlineMail className='text-base'/>
                    <a href="mailto:info@globalshipwave.com">info@globalshipwave.com</a>
                    </div>

            </section>
            <section className='md:flex hidden gap-'> 
          <a href="https://t.me//globalshipwave">
          </a>
          <div className='flex gap-1 items-center border-r pr-5'>
                <FaTelegram className='text-base'/>                
                    <a href="https://t.me//globalshipwave">
                    <p>Telegram</p>
                    </a>
                    </div>

                <div className='flex gap-1 items-center px-5'>
                <FaFacebook className='text-base'/>
                <a href="https://t.me//globalshipwave">
                <p>Facebook</p>
                    </a>
                
                </div>
            </section>
        </div>

        <div className='text- font-semibold flex justify-between items-center px-3 md:px-10 py-2'>
            <div className='flex-col flex items-center'>
            <img src="./img/Asset 1.png" alt="" className='md:w-20 w-[50px]'/>
            <p className='font-extrabold md:block  md:text-xs text-[5px]'>GlobalShipWave</p>
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

            <Link to="/">
            <button className='bg-[#c11425] px-5 hidden md:block text-white text-sm py-2'>
                Track & Trace
            </button>
            </Link>
            <button     ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle} className='bg-[#c11425] md:hidden block px-5 text-white text-sm py-2'>
                <FaBars/>
            </button>
        </div>
      </nav>
<div>
 <Stack direction="row" spacing={2}>
 <div>
   <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <Link to="/">               
                    <MenuItem onClick={handleClose}>Home</MenuItem>
                    </Link>
                    <Link to="/About-us">
                    <MenuItem onClick={handleClose}>About Us</MenuItem>
                    </Link>
                    <Link to="/Services">
                    <MenuItem onClick={handleClose}>Services</MenuItem>
                    </Link>
                    <Link to="/Contact-us">
                    <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                    </Link>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
 </div>
 </Stack>
</div>
    </div>
  )
}

export default Navbar
