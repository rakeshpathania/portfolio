import React from 'react';
import './Interest.css';
import bikeridding from './bike-riding.png';
import gym from './gym.jpg';
import travelling from './travelling.jpg';
import photography from './photography.jpg';
import gaming from './gaming.webp';
import fashion from './fashion.jpg'
import technology from './technology.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';


const Interest = () => {

  const data = [
    {
      interest: "Bike Ridding",
      desc: "Bike riding gives you a sense of freedom and independence as you can explore different places at your own pace. You can go wherever you want, choose your route, and enjoy the feeling of moving under your own power",
      image: bikeridding
    },
    {
      interest: "Gym",
      desc: "Engaging in physical activity at the gym can be an effective way to relieve stress. Exercise stimulates the release of endorphins, which are natural mood boosters, and helps reduce tension and anxiety. It provides an opportunity to divert your focus and clear your mind from daily stressors.",
      image: gym
    },
    {
      interest: "Travelling",
      desc: "Traveling allows you to explore new places, cultures, and experiences. It provides an opportunity to step outside of your comfort zone, discover unfamiliar territories, and broaden your horizons. The sense of adventure and the thrill of exploring the unknown can be incredibly exciting and fulfilling",
      image: travelling
    },
    {
      interest: "Photography",
      desc: "Photography allows you to express your creativity and capture the world through your unique perspective. It enables you to frame moments, compose images, play with light and shadow, and convey emotions or stories through visual artistry. Photography provides a medium for self-expression and allows you to showcase your creativity and artistic vision",
      image: photography
    },
    {
      interest: "Gaming",
      desc: "Many games offer multiplayer modes or online platforms where you can connect with other players around the world. Gaming can be a social activity that allows you to play with friends, join online communities, or participate in team-based competitions. It provides opportunities for collaboration, competition, and building friendships.",
      image: gaming
    },
    {
      interest: "Fashion and Styling",
      desc: "Dressing up in clothes that make you feel good can boost your confidence and empower you. When you feel comfortable and stylish in your outfit choices, it can positively impact your self-image, mindset, and overall sense of well-being. Fashion has the ability to uplift and transform how you feel about yourself.",
      image: fashion
    },
    {
      interest: "Technology and Innovation",
      desc: "Technology is constantly evolving, and staying up-to-date with the latest advancements requires continuous learning. If you have a thirst for knowledge and enjoy exploring new ideas, tools, and technologies, the ever-changing nature of technology provides a stimulating environment for your curiosity.",
      image: technology
    }
  ]
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='container Interest-section' id='interest'>
      <div className='section-title'>
        <h5>Interest</h5>
        <span className='line'></span>
      </div>

      <div className='interest-slider'>
        <Slider {...settings} >
          {data.map((item, index) => (
            <motion.div 
              className='content-slider-main'
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className='content-slider' key={index}>
                <img src={item.image} alt='interest-image' className='center-image' />
                <div className='interest-description'>
                  <p>{item.desc}</p>
                </div>
                <h5 className='interest-heading'>{item.interest} </h5>
              </div>
            </motion.div>

          ))}
        </Slider>
      </div>
    </div>
  )
}


export default Interest