import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <section className="hero mt-32 rounded"
            style={{
                background: `url(${appointment})`
            }}
            >
            <div className="hero-content flex-col lg:flex-row gap-16">
                <img src={doctor} className=" -mt-40 rounded-xl hidden md:block lg:w-1/2 -mb-4" alt='Dental' data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" />
                <div className='' data-aos="fade-down-left">
                    <h3 className='text-xl font-bold text-primary uppercase mb-4'>Appointment</h3>
                    <h1 className="text-4xl font-bold text-white">Make an appointment Today</h1>
                    <p className="py-6 text-xl text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white"> <Link to='/appointment'>APPOINTMENT</Link></button>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;