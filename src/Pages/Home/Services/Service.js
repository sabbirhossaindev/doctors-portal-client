import React from 'react';

const Service = ({service}) => {
    const {name, description , img} = service;
    return (
        <div className="card bg-base-100 shadow-xl" data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-xl text-gray-500'>{description}</p>
            </div>
        </div>
    );
};

export default Service;