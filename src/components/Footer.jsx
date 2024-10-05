import React from 'react';
import '../styles/Footer.css';
import whatsappIcon from '../assets/whatsappIcon.svg'
import instagramIcon from '../assets/instagramIcon.svg'
import emailIcon from '../assets/emailIcon.svg'

const Footer = ({ data }) => {
    return (
        <footer className="footer">
            <div className="footer-text">
                Animate a comunicarte con nosotros a través de nuestras redes!!
            </div>
            <a href={data.whatsapp} target="_blank" rel="noreferrer">
                <img src={whatsappIcon} alt="WhatsApp Icon" width="25" height="25" />
            </a>
            <a href={data.instagram} target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="Instagram Icon" width="25" height="25" />
            </a>
            <a href={data.email} target="_blank" rel="noreferrer">
                <img src={emailIcon} alt="Email Icon" width="25" height="25" />
            </a>
        </footer>
    );
};

export default Footer;
