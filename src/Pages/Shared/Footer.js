import React from 'react';
import footer from '../../../src/assets/images/footer.png';

const Footer = () => {
    return (
        <footer style={{
            background: `url(${footer})`, width: '100%', backgroundSize: 'cover', backgroundPosition: 'center'
        }} className="p-10">
            <div className='footer flex justify-around'>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='my-4 text-center'>
                <p>Copyright 2022 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;