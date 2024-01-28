import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="" className="footer__logo">&#169; MountainDev's</a>

      <ul className="permalinks">
        <ul><a href="#">Home</a></ul>
        <ul><a href="#about">Sobre</a></ul>
        <ul><a href="#experience">Experiências</a></ul>
        <ul><a href="#services">Serviços</a></ul>
        <ul><a href="#portfolio">Portfolio</a></ul>
        <ul><a href="#testimonials">Testimonials</a></ul>
        <ul><a href="#contact">Contato</a></ul>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookF /></a>
        <a href="https://instagram.com"><FiInstagram /></a>
        <a href="https://twitter.com"><FaTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&#169; MountainDev's. Todos direitos reservados.</small>
      </div>
    </footer>
  )
}

export default Footer