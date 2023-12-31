import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import './footer.css'

const Footer = ({setActiveNav, language : {footer}}) => {
  return (
    <footer>
      <a href="#" className='footer__logo'>VOLODYMYR</a>
      <ul className="permalinks">
        <li><a href="#header" onClick={() => setActiveNav('#header')}>{footer.home}</a></li>
        <li><a href="#about" onClick={() => setActiveNav('#about')}>{footer.about}</a></li>
        <li><a href="#experience" onClick={() => setActiveNav('#experience')}>{footer.experience}</a></li>
        <li><a href="#portfolio" onClick={() => setActiveNav('#portfolio')}>Portfolio</a></li>
        <li><a href="#contact" onClick={() => setActiveNav('#contact')}>{footer.contact}</a></li>
      </ul>

      <div className="footer__socials">
        <a href="mailto:vovawestland@gmail.com"><MdOutlineEmail/></a>
        <a href="https://t.me/wladyde97"><FaTelegramPlane/></a>
        <a href="https://api.whatsapp.com/send?phone=+4915906463661"><BsWhatsapp/></a>
        <a href="https://github.com/wladyDE"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;{footer.rights}</small>
      </div>
      </footer>
  )
}

export default Footer