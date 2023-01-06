import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div className="container mx-auto">
            <div className={`card lg:card-side shadow-xl bg-accent ${bgClass}`}>
                <figure className='pl-5 pt-5'><img src={img} /></figure>
                <div className="card-body text-white text-left">
                    <h2 className="card-title">{cardTitle}</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;