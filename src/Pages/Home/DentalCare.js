import React from 'react';
import treatment from '../../../src/assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const DentalCare = () => {
    return (
        <div className="hero h-screen">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20">
                <img style={{ height: '576px', width: '458px', margin: '0 auto' }} src={treatment} className="w-screen rounded-lg shadow-2xl" />
                <div className='text-left'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 h-1/2">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>

            </div>
        </div>
    );
};

export default DentalCare;