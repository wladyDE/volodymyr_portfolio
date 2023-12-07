import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me2.png'
import HeaderSocials from './HeaderSocials'
import { eng, de } from '../../translations/translations'
import './header.css'

const Header = ({setActiveNav, language, setLanguage}) => {
  const {header} = language; 

  return (
    <header className='header' id='header'>
      <div className="container header__container">
        <LanguageSwitch language={language.value} setLanguage={setLanguage}/>
        <h5>{header.greeting}</h5>
        <h1>Volodymyr Havryliuk</h1>
        <h5 className="text-light">{header.profession}</h5>
        <CTA header={header}/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <HeaderSocials />
        <a href="#contact" className='scroll__down' onClick={() => setActiveNav('#contact')}>{header.scrollDown}</a>


      </div>
    </header>
  )
}

const LanguageSwitch = ({ language, setLanguage }) => {
  const toggleLanguage = () => {
    const newLanguage = language === 'eng' ? de : eng;
    setLanguage(newLanguage); 
  };

  return (
    <div className="language-switch" onClick={toggleLanguage}>
      <div className={`language-switch__option ${language === 'eng' ? 'btn-primary' : ''}`}>ENG</div>
      <div className={`language-switch__option ${language === 'de' ? 'btn-primary' : ''}`}>DE</div>
    </div>
  );
};

export default Header