import React, {useState, useEffect} from 'react'
import About from './components/about/About.jsx'
import Header from './components/header/Header.jsx'
import Nav from './components/nav/Nav.jsx'
import Experience from './components/experience/Experience.jsx'
import Portfolio from './components/portfolio/Portfolio.jsx'; 
import Contact from './components/contact/Contact.jsx'; 
import Footer from './components/footer/Footer.jsx'; 

const App = () => {
  const [activeNav, setActiveNav] = useState('#header')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['header', 'about', 'experience', 'portfolio', 'contact'];
      const scrollY = window.pageYOffset;
  
      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        const offsetTop = section.offsetTop - 100;
  
        if (offsetTop <= scrollY && section.offsetTop + section.offsetHeight > scrollY) {
          setActiveNav('#' + sections[i]);
          break;
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <>
      <Header setActiveNav={setActiveNav}/>
      <Nav activeNav={activeNav} setActiveNav={setActiveNav}/>
      <About setActiveNav={setActiveNav}/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer setActiveNav={setActiveNav}/>
    </>
  )
}

export default App