import React from 'react';
import Section from './Section';  

const Home = ({ data }) => {
    return (
        <div className="home">
            {data.sections.map((section) => (
                <Section key={section.id} data={section} />
            ))}
        </div>
    );
};

export default Home;
