import React from 'react';
import chair from '../../../assets/images/chair.png';
import bg from '../../../assets/images/bg.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="hero"
        style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' data-aos="zoom-in" />
                <div data-aos="zoom-in">
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here!</h1>
                    <p className="py-6 text-xl text-gray-500">A brand new year means ample opportunity to start new projects, try new things, and embark on new adventures. What better way to tackle the year ahead of us than with a winning smile on your face? Here are some ways you can make the start of your new year even better.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"><Link to='/appointment'>Get Start</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;