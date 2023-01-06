import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../../src/assets/icons/clock.svg';
import marker from '../../../src/assets/icons/marker.svg';
import phone from '../../../src/assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCard cardTitle="Opening Hours" bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCard>
            <InfoCard cardTitle="Visit our location" bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact us now" bgClass="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;