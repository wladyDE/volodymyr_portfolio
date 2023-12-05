import React from 'react'
import './about.css'
import ME from '../../assets/me5.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
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
              <h5>Experience</h5>
              <small>3+ Year Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Maxime itaque earum, molestiae aut natus qui nihil quas iste quisquam mollitia excepturi
            molestias accusantium incidunt perspiciatis in provident suscipit optio reiciendis.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About