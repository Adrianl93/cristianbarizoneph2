import React from 'react';
import '../styles/Section.css';
import ContactForm from './ContactForm';
import Courses from './Courses';
import PhotographyPresentation from './PhotographyPresentation';
import Biography from './Biography';

const Section = ({ data }) => {
    const sectionStyle = {
        backgroundColor: data.backgroundColor,
        backgroundSize: '100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <div id={data.id} className="section" style={{ backgroundColor: data.backgroundColor }}>
            <div className="section-box" style={sectionStyle}>
                <div className="section-content">
                    {data.id === "home" ? <Biography data={data}/>:
                    data.id === "section2" ? (
                        <Courses data={data} />
                    ) : data.form ? (
                        <ContactForm data={data}/>
                    ) : data.id === "section1" ? (
                        <PhotographyPresentation data={data} />
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Section;
