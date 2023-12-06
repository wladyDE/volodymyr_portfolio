import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { FaTelegramPlane } from "react-icons/fa";
import { BsWhatsapp } from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>VOLODYMYR</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="about">About</a></li>
        <li><a href="experience">Experience</a></li>
        <li><a href="portfolio">Portfolio</a></li>
        <li><a href="contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><MdOutlineEmail/></a>
        <a href=""><FaTelegramPlane/></a>
        <a href=""><BsWhatsapp/></a>
        <a href=""><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Volodymyr's Portfolio. All rights reserved.</small>
      </div>
      </footer>
  )
}

export default Footer