import React from 'react';
import chair from '../../../src/assets/images/chair.png';
import bgChair from '../../../src/assets/images/bg.png';
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero h-screen" style={{backgroundImage: `url(${bgChair})`, backgroundRepeat: 'no-repeat', width: '100%', backgroundSize: 'cover', height: '100vh'}}>
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className='text-left'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 h-1/2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
                <img style={{height: '355px', width: '594px'}} src={chair} className="w-screen rounded-lg shadow-2xl" />
            </div>
        </div>
    );
};

export default Banner;