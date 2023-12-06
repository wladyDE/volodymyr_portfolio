import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { FaTelegramPlane } from "react-icons/fa";

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://github.com/wladyDE" target='_blank'>
                <FaGithub />
            </a>
            <a href="mailto:vovawestland@gmail.com" target='_blank'>
                <MdOutlineEmail />
            </a>
            <a href="https://t.me/wladyde97" target='_blank'>
                <FaTelegramPlane  />
            </a>
        </div>
    )
}

export default HeaderSocials