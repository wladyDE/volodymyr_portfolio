import React, { useRef, useState, useEffect } from 'react';
import { MdOutlineEmail } from 'react-icons/md'
import { FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
import './contact.css'

const Contact = ({language : {contact}}) => {
  const [status, setStatus] = useState('waiting');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5teszir', 'template_689qxik', form.current, 'J41Z3umNHKYMIMC1I')
      .then((result) => {
        setStatus('sent')
      }, (error) => {
        setStatus('error')
        console.log(error.text);
      });

    e.target.reset();
  };

  useEffect(() => {
    if (status === 'sent') {
      setTimeout(() => setStatus('isWaiting'), 5000);
    }
  }, [status]);

  const formStatus = {
    waiting: null,
    sent: <p className='contact__success'>{contact.successMessage}</p>,
    error: <p className='contact__error'>{contact.errorMessage}</p>
  }

  return (
    <section id='contact'>
      <h5>{contact.getInTouch}</h5>
      <h2>{contact.contactMe}</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>vovawestland@gmail.com</h5>
            <a href="mailto:vovawestland@gmail.com" target='_blank'>{contact.sendMessage}</a>
          </article>
          <article className="contact__option">
            <FaTelegramPlane className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>Volodymr Havryliuk</h5>
            <a href="https://t.me/wladyde97" target='_blank'>{contact.sendMessage}</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>Volodymyr Havryliuk</h5>
            <a href="https://api.whatsapp.com/send?phone=+4915906463661" target='_blank'>{contact.sendMessage}</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder={contact.yourFullName} required />
          <input type="email" name='email' placeholder={contact.yourEmail} required />
          <textarea name="message" placeholder={contact.yourMessage} rows="7" required></textarea>
          <div className="form__submit">
            <button type='submit' className='btn btn-primary'>{contact.sendMessage}</button>
            {formStatus[status]}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact