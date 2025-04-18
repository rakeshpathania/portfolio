import React from 'react'
import './SidebarList.css'
import profilepic from "../../Image/developer1.JPEG"
import { FcHome, FcNightPortrait, FcTodoList, FcContacts, FcFactory } from "react-icons/fc";
import { MdBiotech, MdCastForEducation, MdInterests } from "react-icons/md";
import { Link } from "react-scroll";

const SidebarList = ({ expandSidebar }) => {
  return (
    <>
      {expandSidebar ? (
        <div className='navbar-items'>
          <div className='sidebar-profile-pic'>
            <img src={profilepic} alt='profile picture' />
          </div>
          <ul>
            <li className='nav-item'>
              <Link to='home'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} />Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='about'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcNightPortrait size={25} />About
              </Link>

            </li>
            <li className='nav-item'>
              <Link to='techstack'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdBiotech size={25} color='orange' />Tech Stack
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='workexperience'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFactory size={25} />Work Experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='project'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={25} />Projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='education'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdCastForEducation size={25} color='yellow' />Education
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='interest'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdInterests size={25} color='#FF6347' />Interests
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='contact'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcContacts size={25} />Contact
              </Link>
            </li>

          </ul>
        </div>
      ) : (
        <div className='navbar-items-only-icons'>
          <ul>
            <li className='nav-item'>
              <Link to='home'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcHome size={25} />
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='about'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcNightPortrait size={25} />
              </Link>

            </li>
            <li className='nav-item'>
              <Link to='techstack'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdBiotech size={25} color='orange' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='workexperience'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcFactory size={25} />
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='project'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcTodoList size={25} />
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='education'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdCastForEducation size={25} color='yellow' />
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='interest'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <MdInterests size={25} color='#FF6347' />
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='contact'
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                <FcContacts size={25} />
              </Link>
            </li>

          </ul>
        </div>
      )}
    </>
  )
}

export default SidebarList
