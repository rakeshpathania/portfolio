import React from 'react';
import "./About.css";
import profilepic from "../../Image/developer1.JPEG";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';

const About = () => {
    return (
        <div className='container about-section' id='about'>
            <div className='row'>
                <Fade bottom>
                    <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                        <div className='about-image'>
                            <img 
                                src={profilepic} 
                                alt='Profile Photo' 
                                className='zoom-effect'
                            />
                        </div>
                    </div>
                </Fade>

                <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                    <div className='about-details'>
                        <Flip left>
                            <div className='about-title'>
                                <h5>About Me</h5>
                                <span className='line'></span>
                            </div>
                        </Flip>
                        <Fade right>
                            <p>
                            Accomplished Backend Developer with over 3 years of experience in designing and implementing scalable web applications and managing seamless data exchange between servers and users. Expertise in Node.js, Express, Fastify, NestJS, Laravel, and PHP, complemented by a strong command of modern JavaScript frameworks like React and Vue.js. Proven skills in building REST APIs, integrating microservices architecture, and optimizing database performance with PostgreSQL, MySQL, and MongoDB. Proficient in cloud services, including AWS S3, with a track record of successful collaboration with cross-functional teams to deliver high-quality projects on time. Passionate about leveraging cutting-edge technologies to create efficient, scalable, and user-centric solutions.
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
