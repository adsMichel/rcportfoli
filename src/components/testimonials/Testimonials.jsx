import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Avaliações dos clientes</h5>
      <h2>Avaliações</h2>

      <div className='container testimonials__container'>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
            <h5 className='client__name'>Flávia Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dignissimos tenetur aperiam eaque, repudiandae nemo sit aliquam! Dicta incidunt quidem rem dignissimos quis at inventore. Beatae similique natus consequatur autem!
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar Two" />
          </div>
            <h5 className='client__name'>Eliano Mundim</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dignissimos tenetur aperiam eaque, repudiandae nemo sit aliquam! Dicta incidunt quidem rem dignissimos quis at inventore. Beatae similique natus consequatur autem!
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar Three" />
          </div>
            <h5 className='client__name'>Arthur Nogueira</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dignissimos tenetur aperiam eaque, repudiandae nemo sit aliquam! Dicta incidunt quidem rem dignissimos quis at inventore. Beatae similique natus consequatur autem!
            </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar Four" />
          </div>
            <h5 className='client__name'>Marcela Guimarães</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dignissimos tenetur aperiam eaque, repudiandae nemo sit aliquam! Dicta incidunt quidem rem dignissimos quis at inventore. Beatae similique natus consequatur autem!
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials