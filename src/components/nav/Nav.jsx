import React from 'react'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { PiMedalLight } from "react-icons/pi";
import './nav.css'

const Nav = ({ activeNav, setActiveNav }) => {
  return (
    <nav>
      <a href="#header" className={activeNav === '#header' ? 'active' : ''} onClick={() => setActiveNav('#header')}>
        <AiOutlineHome />
      </a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about')}>
        <AiOutlineUser />
      </a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience')}>
      <PiMedalLight  />
      </a>
      <a href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''} onClick={() => setActiveNav('#portfolio')}>
        <BiBook />
      </a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav('#contact')}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  )
}

export default Nav