import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import { FaWhatsapp } from "react-icons/fa";
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Entre Em Contato</h5>
      <h2>Fale Comigo</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>michel.naoki@gmail.com</h5>
            <a href="mailto:michel.naoki@gmail.com" target='_blank'>Envie uma mensagem</a>
          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+55 61 99407-8504</h5>
            <a href="https://api.whatsapp.com/send/?phone=5561994078504" target='_blank'>Envie uma mensagem</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Michel.Naoki</h5>
            <a href="#" target='_blank'>Envie uma mensagem</a>
          </article>
        </div>
        {/* Fim do contact options */}
        <form action="">
          <input type="text" name='name' placeholder='Nome completo' required />
          <input type="email" name="email" placeholder='Seu e-mail' required/>
          <textarea name="message" rows="7" placeholder='Deixe sua mensagem' required></textarea>
          <button type='submit' className='btn btn-primary'> Envie uma mensagem</button>
        </form>
      </div>
    </section>
  )
}

export default Contact