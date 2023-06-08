import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import { Link } from 'react-router-dom';

const Dental = () => {
    return (
        <div className="hero mt-16">
            <div className="hero-content flex-col lg:flex-row gap-16">
                <img src={treatment} className=" rounded-xl lg:w-1/2" alt='Dental' data-aos="flip-left"/>
                <div data-aos="fade-down-left">
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 text-xl text-gray-500">We welcome new patients of all ages. Our experienced team is committed to creating a relaxing atmosphere, to make sure you feel at ease and comfortable right from the first time you step into our practice. Feel confident and know you’re in good hands every time you visit My Midland Dentist.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"><Link to='/appointment'>Get Treatment</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Dental;