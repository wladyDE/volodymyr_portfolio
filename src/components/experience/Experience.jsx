import React from 'react';
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = ({language : {experience}}) => {
  return (
    <section id='experience'>
      <h5>{experience.skills}</h5>
      <h2>{experience.title}</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>{experience.frontendDev}</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>{experience.experienced}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS, SCSS</h4>
                <small className='text-light'>{experience.experienced}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>{experience.experienced}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>{experience.experienced}</small>
              </div>
            </article>
          </div>
        </div>



        <div className="experience__backend">
          <h3>{experience.backendDev}</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Java Spring</h4>
                <small className='text-light'>{experience.intermediate}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Google Firebase</h4>
                <small className='text-light'>{experience.experienced}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>{experience.experienced}</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Web Scraping</h4>
                <small className='text-light'>{experience.experienced}</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience