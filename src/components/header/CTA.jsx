import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = ({header}) => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>{header.download}</a>
        <a href="#contact" className='btn btn-primary'>{header.letsTalk}</a>
    </div>
  )
}

export default CTA