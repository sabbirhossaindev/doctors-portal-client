import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import { Link } from 'react-router-dom';

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
            
            <div className="hero my-10">
                <div className="hero-content flex-col lg:flex-row">
                <div className='w-full' data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                            <h1 className="text-white font-bold text-4xl">Location </h1>
                            <div className='px-10 py-10'>
                        <p><iframe src="https://goo.gl/maps/TqvxeEV6i8jiNr2P8" width="350px" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
                        </div>
                        </div>
                            <div className=' w-full' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
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
                </div>
        </section>
    );
};

export default ContactUs;