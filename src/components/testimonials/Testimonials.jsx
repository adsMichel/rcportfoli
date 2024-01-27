import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVT1,
    nome: 'Flávia Venturini',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dignissimos tenetur aperiam eaque, repudiandae nemo sit aliquam! Dicta incidunt quidem rem dignissimos quis at inventore. Beatae similique natus consequatur autem!'
  },
  {
    avatar: AVT2,
    nome: 'Eliano Mundim',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dignissimos tenetur aperiam eaque, repudiandae nemo sit aliquam! Dicta incidunt quidem rem dignissimos quis at inventore. Beatae similique natus consequatur autem!'
  },
  {
    avatar: AVT3,
    nome: 'Diego Nogueira',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dignissimos tenetur aperiam eaque, repudiandae nemo sit aliquam! Dicta incidunt quidem rem dignissimos quis at inventore. Beatae similique natus consequatur autem!'
  },
  {
    avatar: AVT4,
    nome: 'Marília Chaves',
    review: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum dignissimos tenetur aperiam eaque, repudiandae nemo sit aliquam! Dicta incidunt quidem rem dignissimos quis at inventore. Beatae similique natus consequatur autem!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Avaliações dos clientes</h5>
      <h2>Avaliações</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({avatar, nome, review}, index) => {
          return (
            <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{nome}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
      }
      </Swiper>
    </section>
  )
}

export default Testimonials