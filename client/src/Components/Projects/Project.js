import React from 'react';
import ProjectList from './ProjectList';
import "./Project.css";
import Zoom from 'react-reveal/Zoom';

const Project = () => {
    const data = [
        {
            name: 'Players Wanted',
            desc: "This project helps you to connect with nearby people to play sports. There are two options for registration as a player and as an instructor. Where you can find the people near you through the map and connect them with the help of a chat module, and also you can take coaching for the particular game as per your interest and buy their various package from instructors. and the instructor can upload the video lesson for different games and set the package amount and duration accordingly.",
            projectlink: "https://playerswanted.onrender.com/register",
            techused:[
                {techname: "Node.js"},
                {techname: "Express.js"},
                {techname: "MySql"},
                {techname: "EJS"},
                {techname: "Ajax"},
                {techname: "JavaScript"},
                {techname: "Socket.Io"},
                {techname: "Stripe"},
                {techname: "Google API's"},


            ]
        },
        {
            name: `Snappy-Let's Chat`,
            desc: "Snappy - Let's Chat is a real-time chat application built with Node.js and Express, leveraging Socket.io for fast and seamless communication. It offers end-to-end encryption (E2EE) to ensure secure messaging between users.",
            projectlink: "https://melodic-brioche-985840.netlify.app/login",
            techused:[
                {techname: "Node.js"},
                {techname: "Express.js"},
                {techname: "MongoDb"},
                {techname: "React"},
                {techname: "JavaScript"},
                {techname: "Socket.Io"},

            ]
        },
        {
            name: 'PaisaXC- A Crypto Exchange',
            desc: "I contributed to a cryptocurrency exchange and trading platform in India, enabling users to buy, sell, and trade 100+ cryptocurrencies like BTC, XRP, ETH, and TRX. I developed the P2P trading module (similar to WazirX) for seamless transactions, integrated a buyer-seller chat for real-time negotiations, and built a support system for dispute resolution. Additionally, I managed backend APIs using Laravel for authentication and settings while implementing frontend API consumption with Vue.js to ensure a smooth user experience. This platform prioritizes security, speed, and efficiency in cryptocurrency trading. 🚀",
            projectlink: "https://www.demo.paisaxc.com/",
            techused:[
                {techname: "Laravel"},
                {techname: "MySql"},
                {techname: "Vue.Js"},
                {techname: "Node.Js"},
                {techname: "Express.Js"},
                {techname: "JavaScript"},
                {techname: "Socket.Io"},

            ]
        },
        {
            name: 'OSRJobs- A Job Portal',
            desc: "OSR Job Portal is a comprehensive job search platform designed to connect job seekers with employers. It offers seamless job searching, direct applications, and third-party job integrations to enhance opportunities for users. Employers and administrators can manage job postings efficiently, including bulk imports via CSV. The portal also integrates Stripe for secure payment processing, making it a robust solution for job listings, premium postings, and other recruitment services.",
            projectlink: "https://www.osrjobs.com/",
            techused:[
                {techname: "Node.js"},
                {techname: "Express"},
                {techname: "MongoDb"},
                {techname: "NextJs"},
                {techname: "JavaScript"},
                {techname: "JWT/OAuth"},
                {techname: "Stripe API"},
                {techname: "AWS S3"},
            ]
        },  
    ]
  return (
    <Zoom >
    <div className='container project-section'>
        <div className='section-title'>
            <h5>Projects</h5>
            <span className='line'></span>
        </div>

        <div className='row'>
            {data.map((item,index)=>(
                <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
                    <ProjectList {...item}/>
                </div>
            ))}
        </div>
    </div>
    </Zoom>

  )
}

export default Project