import React from 'react';
import '../styles/Biography.css';

const Biography = ({ data }) => {
    return (
        <div className="biography-section">
            <div className="biography-grid">
                <div className="biography-text">
                    <p className="biography-text-title"><b>{data.description1}</b></p>
                    <p className="biography-text-p">{data.description2}</p>
                    <p className="biography-text-p">{data.description3}</p>
                    <p className="biography-text-p">{data.description4}</p>
                </div>
                <div className="biography-image">
                    <img src={data.image} alt="Biography" />
                </div>
            </div>
        </div>
    );
};

export default Biography;
