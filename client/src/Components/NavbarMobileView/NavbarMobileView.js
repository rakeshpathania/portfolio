import React, { useState } from 'react';
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FcHome, FcNightPortrait, FcTodoList, FcContacts, FcFactory } from "react-icons/fc";
import { MdBiotech, MdCastForEducation, MdInterests } from "react-icons/md";
import { Link } from "react-scroll";
import Switch from "react-switch";

const NavbarMobileView = ({ theme, changeTheme }) => {

  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className='mobile-view-navbar'>

      <div className='navbar-header'>
        <p>
          <GiHamburgerMenu size={30} onClick={handleClick} />
        </p>
      </div>
      {open ? (<div className='mobile-nav'>
        <ul>
          <li className='nav-item-mobileview'>
            <Link to='home'
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcHome size={25} />Home
            </Link>
          </li>
          <li className='nav-item-mobileview'>
            <Link to='about'
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcNightPortrait size={25} />About
            </Link>

          </li>
          <li className='nav-item-mobileview'>
            <Link to='techstack'
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <MdBiotech size={25} color='orange' />Tech Stack
            </Link>
          </li>
          <li className='nav-item-mobileview'>
            <Link to='workexperience'
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcFactory size={25} />Work Experience
            </Link>
          </li>
          <li className='nav-item-mobileview'>
            <Link to='project'
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcTodoList size={25} />Projects
            </Link>
          </li>
          <li className='nav-item-mobileview'>
            <Link to='education'
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <MdCastForEducation size={25} color='yellow' />Education
            </Link>
          </li>

          <li className='nav-item-mobileview'>
            <Link to='interest'
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <MdInterests size={25} color='#FF6347' />Interests
            </Link>
          </li>
          <li className='nav-item-mobileview'>
            <Link to='contact'
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <FcContacts size={25} />Contact
            </Link>
          </li>
          <li className='nav-item-mobileview'>
          <Switch onChange={changeTheme} checked={theme === 'dark'} />
          </li>


        </ul>
      </div>) : null}


    </div>
  )
}

export default NavbarMobileView