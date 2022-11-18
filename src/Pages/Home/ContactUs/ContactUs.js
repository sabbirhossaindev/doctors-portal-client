import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <section
        style={{
            background: `url(${appointment})`,
            backgroundSize: 'cover'
            }}
        className='p-10 rounded-lg' data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <div className='text-center'>
                <h3 className='font-bold text-xl text-primary'>Contact Us</h3>
                <h1 className='text-white font-bold text-4xl'>Stay connected with us</h1>
            </div>
            
            <div className='md:flex md:justify-center'>
                <div className="card lg:w-1/2 sm:w-1/2 md:w-1/2">
                    <div className="card-body">
                        <div className="form-control">
                            <input type="text" placeholder="Email Address" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <textarea className="textarea textarea-accent" placeholder="Your message"></textarea>
                        </div>
                    </div>
                    <div className='mb-8 text-center'>
                            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Submit</button>
                    </div>
                </div>
            </div>    
        </section>
    );
};

export default ContactUs;