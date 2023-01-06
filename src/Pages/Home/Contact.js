import React from 'react';
import appointment from '../../../src/assets/images/appointment.png';

const Contact = () => {
    return (
        <section className='py-16' style={{
            background: `url(${appointment})`, width: '100%', backgroundSize: '100%'
        }}>

            <div>
                <h3 className="text-xl font-bold text-primary">Contact Us</h3>
                <h2 className='text-3xl text-white mt-3'>Stay connected with us</h2>
            </div>

            <form className='mx-auto mt-8'>
                <input type="text" placeholder="Email Address" className="input input-bordered input-primary w-1/2 block mx-auto" required/>
                <input type="text" placeholder="Subject" className="input input-bordered input-primary w-1/2 block mx-auto mt-4" required/>
                <textarea className="textarea textarea-primary mt-4 block w-1/2 mx-auto h-32" placeholder="Your message" required></textarea>
                <input className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary mt-6' type="submit" value="Submit" />
            </form>
        </section>
    );
};

export default Contact;