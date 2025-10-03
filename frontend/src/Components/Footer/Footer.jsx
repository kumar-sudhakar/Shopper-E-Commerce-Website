import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'



const Footer = () => {
  return (
    <div className='footer'>

        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>

        <ul className="footer-links">
            <li><a href="/Navbar">Company</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/offices">Offices</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>

        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <img src={instagram_icon} alt="Instagram Icon" />
                </a>
            </div>
            <div className="footer-icons-container">
                <a href="https://in.pinterest.com/" target="_blank" rel="noopener noreferrer">
                <img src={pintester_icon} alt="Pinterest Icon" />
                </a>
            </div>
            <div className="footer-icons-container">
                <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp_icon} alt="WhatsApp Icon" />
                </a>
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Right Reserved. </p>
        </div>


    </div>
  )
}

export default Footer