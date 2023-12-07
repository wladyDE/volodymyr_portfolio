import React from 'react'
import './about.css'
import ME from '../../assets/me5.jpg'
import { FaAward } from 'react-icons/fa'
import { GrLanguage } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";

const About = ({setActiveNav, language: {about}}) => {
  return (
    <section id='about'>
      <h5>{about.getToKnow}</h5>
      <h2>{about.title}</h2>
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
              <h5>{about.occupation}</h5>
              <small>Quinscape GmbH</small>
            </article>
            <article className='about__card'>
              <GrLanguage className="about-icon" />
              <h5>{about.languagesTitle}</h5>
              <small>{about.languages}</small>
            </article>
            <article className='about__card'>
              <FaHeart className="about-icon" />
              <h5>Hobbys</h5>
              <small>{about.hobbys}</small>
            </article>
          </div>

          <p>
          {about.aboutMe}
          </p>

          <a href="#contact" className='btn btn-primary' onClick={() => setActiveNav('#contact')}>{about.letsTalk}</a>
        </div>
      </div>
    </section>
  )
}

export default About