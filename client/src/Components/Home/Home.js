import React from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect';
import rakeshcv from './Rakesh-Pathania-Nodejs-resume.pdf';
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

const Home = ({ theme, changeTheme }) => {
  const handleDownloadCV = () => {
    window.open(rakeshcv, '_blank');
  };

  return (
    <div className='container-fluid home' id='home'>
      <div className='theme-change' onClick={changeTheme}>

        {theme === 'light' ? (<p><BsFillMoonStarsFill size={30} /></p>) : (<p className='sun-theme-icon'><BsFillSunFill size={30} /></p>)}

      </div>
      <div className='container home-content'>
        <Fade right>
          <h1>Hi I'm Rakesh Pathania</h1>
          <h3>
            <Typewriter
              options={{
                strings: ['Full Stack Software Developer', 'MERN Stack Developer', 'Web Developer'],
                autoStart: true,
                loop: true,
                delay: 5
              }}
            />
          </h3>
        </Fade>
        <Fade bottom>
          <div className='button-for-action'>

            <Link to='contact'
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <div className='hire-me-button'>Hire Me  </div>
            </Link>

            <div className='get-resume-button' onClick={handleDownloadCV}>
              Get CV
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
