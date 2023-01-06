import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl ">
            <div class="card-body">
                <h2 class="card-title justify-center text-secondary">{name}</h2>
                <p>{slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'>Try another date</span>}</p>
                <p>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">
                    {/* The button to open modal */}
                    <label for="booking-modal" onClick={() => setTreatment(service)} disabled={slots.length === 0} class="btn btn-sm btn-secondary text-white bg-gradient-to-r from-secondary to-primary" >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;