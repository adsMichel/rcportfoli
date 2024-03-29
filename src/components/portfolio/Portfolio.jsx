import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Titulo One',
    github: 'https://github.com/adsmichel',
    demo: 'https://dribbble.com/shots/23496935-Hyper-Charts-templates-Sales'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Titulo Two',
    github: 'https://github.com/adsmichel',
    demo: 'https://dribbble.com/shots/23496923-Orion-UI-kit-is-a-library-with-50-full-width-dashboard-template'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Titulo Three',
    github: 'https://github.com/adsmichel',
    demo: 'https://dribbble.com/shots/23441431-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Titulo Four',
    github: 'https://github.com/adsmichel',
    demo: 'https://dribbble.com/shots/23402855-Data-presentation-and-dashboard-templates'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Titulo Five',
    github: 'https://github.com/adsmichel',
    demo: 'https://dribbble.com/shots/23402778-Stunning-and-professional-looking-visualizations-for-any-project'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Titulo Six',
    github: 'https://github.com/adsmichel',
    demo: 'https://dribbble.com/shots/23224234-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Trabalhos Recentes</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__items'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__items-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio