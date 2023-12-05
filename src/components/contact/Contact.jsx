import React, { useRef } from 'react';
import {MdOutlineEmail} from 'react-icons/md'
import { FaTelegramPlane } from "react-icons/fa";
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5teszir', 'template_689qxik', form.current, 'J41Z3umNHKYMIMC1I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset(); 
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vovawestland@gmail.com</h5>
            <a href="mailto:vovawestland@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
          <FaTelegramPlane className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>Volodymr Havryliuk</h5>
            <a href="mailto:vovawestland@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>vovawestland@gmail.com</h5>
            <a href="https://api.whatsapp.com/send?phone=+4915906463661" target='_blank'>Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" placeholder="Your message" rows="7"></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact