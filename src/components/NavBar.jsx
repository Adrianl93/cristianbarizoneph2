import React, { useState } from 'react';
import '../styles/NavBar.css';

const NavBar = ({ data }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <a href="/">Cristian Barizone PH</a>

            <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
                {data.sections.map((section) => (
                    <a key={section.id} href={`/#${section.id}`}>{section.label}</a>
                ))}
                <a href="https://cristianbarizoneph.empretienda.com.ar/">Tienda Nube</a>
            </div>

            <div className="hamburger" onClick={toggleMenu}>
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
            </div>
        </nav>
    );
};

export default NavBar;
