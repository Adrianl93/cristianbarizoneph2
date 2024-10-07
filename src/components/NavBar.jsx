import React from 'react';
import '../styles/NavBar.css';

const NavBar = ({ data }) => {
    return (
        <nav className="navbar">
            <a href="/">Home</a>
            {data.sections.map((section) => (
                <a key={section.id} href={`/#${section.id}`}>{section.label}</a>
            ))}
            <a href="https://cristianbarizoneph.empretienda.com.ar/">Tienda Nube</a>
        </nav>
    );
};

export default NavBar;
