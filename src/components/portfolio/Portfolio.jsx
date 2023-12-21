import React from 'react'
import './portfolio.css'
import BuffOrderChangerImg from '../../assets/portfolio1.png'
import FitConnectImg from '../../assets/portfolio2.png'
import KingGymImg from '../../assets/portfolio3.png'
import TicTacToeImg from '../../assets/portfolio4.png'
import MarvelImg from '../../assets/portfolio5.png'
import DataServImg from '../../assets/portfolio7.png'
import SkinportImg from '../../assets/portfolio6.png'

const data = [
  {
    id: 1,
    image: FitConnectImg,
    title: 'FitConnect',
    github: 'https://github.com/wladyDE/FitConnect'
  },
  {
    id: 2,
    image: TicTacToeImg,
    title: 'Tic-Tac-Toe',
    github: 'https://github.com/wladyDE/tic-tac-toe'
  },
  {
    id: 3,
    image: KingGymImg,
    title: 'King`s Gym',
    github: 'https://github.com/wladyDE/fitness_club/tree/master'
  },
  {
    id: 4,
    image: MarvelImg,
    title: 'Marvel',
    github: 'https://github.com/wladyDE/marvel'
  },
  {
    id: 5,
    image: DataServImg,
    title: 'DataServe',
    github: 'https://github.com/wladyDE/server-socket/tree/master'
  },
  {
    id: 6,
    image: SkinportImg,
    title: 'Web Scrapers',
  }
]

const Portfolio = ({ language: { portfolio } }) => {
  return (
    <section id='portfolio'>
      <h5>{portfolio.recentWork}</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (<article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github && <a href={github} className='btn btn-primary' target='_blank'>Github</a>}
              </div>
            </article>)
          })
        }
      </div>
    </section>
  )
}

export default Portfolio