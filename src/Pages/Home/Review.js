import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium velit doloribus vel cupiditate sint iste?</p>
                <div className="flex items-center mt-4">
                    <div className="avatar mr-5">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100">
                            <img src={review.img} alt=""/>
                        </div>
                    </div>
                    <div className='text-left'>
                        <h3 className="text-xl font-bold">{review.name}</h3>
                        <h4 className='text-sm mt-2'>{review.location}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;