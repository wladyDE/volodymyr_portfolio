import React from 'react'
import './about.css'
import ME from '../../assets/me5.jpg'
import { FaAward } from 'react-icons/fa'
import { GrLanguage } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";

const About = ({setActiveNav}) => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className="about-icon" />
              <h5>Apprenticeship</h5>
              <small>Quinscape GmbH</small>
            </article>
            <article className='about__card'>
              <GrLanguage className="about-icon" />
              <h5>Languages</h5>
              <small>Eng Ger Ukr Rus</small>
            </article>
            <article className='about__card'>
              <FaHeart className="about-icon" />
              <h5>Hobbys</h5>
              <small>Fitness, Cold-water swimming</small>
            </article>
          </div>

          <p>
          I am currently in my second year of apprenticeship as an IT specialist at Quinscape GmbH. With over two years of passion in the IT field, I am proficiently developing skills in both backend and frontend development, alongside web scraping. My experience includes hands-on work in various projects. In my leisure time, I enjoy training and the invigorating experience of cold-water swimming
          </p>

          <a href="#contact" className='btn btn-primary' onClick={() => setActiveNav('#contact')}>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About