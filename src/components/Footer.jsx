import React, { useState, useEffect } from 'react';
import '../styles/Footer.css';
import whatsappIcon from '../assets/whatsappIcon.svg';
import instagramIcon from '../assets/instagramIcon.svg';
import emailIcon from '../assets/emailIcon.svg';

const Footer = ({ data }) => {
    const [isMobile, setIsMobile] = useState(false);

    // Función para manejar el tamaño de la pantalla
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Detecta si el ancho es menor o igual a 768px
    };

    useEffect(() => {
        // Añadir un listener para cuando cambie el tamaño de la ventana
        window.addEventListener('resize', handleResize);

        // Llamamos a handleResize al cargar el componente
        handleResize();

        // Limpieza del listener al desmontar el componente
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer className="footer">
            <div className="footer-text">
                {isMobile ? 'Seguinos en nuestras redes' : 'Animate a comunicarte con nosotros a través de nuestras redes!!'}
            </div>
            <div className="footer-buttons"> 
                <a href={data.whatsapp} target="_blank" rel="noreferrer">
                    <img src={whatsappIcon} alt="WhatsApp Icon" width="25" height="25" />
                </a>
                <a href={data.instagram} target="_blank" rel="noreferrer">
                    <img src={instagramIcon} alt="Instagram Icon" width="25" height="25" />
                </a>
                <a href={data.email} target="_blank" rel="noreferrer">
                    <img src={emailIcon} alt="Email Icon" width="25" height="25" />
                </a>

            </div>
            
        </footer>
    );
};

export default Footer;
