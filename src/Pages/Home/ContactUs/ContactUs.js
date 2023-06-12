import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import './Contact.css';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const addSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const addInfo = {
            name, email, subject, message
        }
        console.log('addInfo', addInfo);

        fetch(`https://dev-sabbir-server.vercel.app/submit`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(addInfo)
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            toast.success('Message sand.😮 please check your email your answer will be given after a few minutes later📝 Thank you !🥰');
            form.reset('');
        })
    }
    return (
        <section className="hero mt-16" style={{
            background: `url(${appointment})`,
            backgroundSize: 'cover'
            }}>

            <div className='text-center'>
                <h3 className='font-bold text-xl text-primary'>Contact Us</h3>
                <h1 className='text-white font-bold text-4xl'>Stay connected with us</h1>
            <div className="hero-content flex-col lg:flex-row gap-16 my-5">
                <div className='rounded-xl lg:w-1/2'data-aos="flip-left">
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29073.83467664921!2d91.38732527780857!3d24.373324226682062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375144f6464c0833%3A0xb6a116d243e411d2!2z4KaG4Kan4KeB4Kao4Ka_4KaVIOCmnOCnh-CmsuCmviDgprjgpqbgprAg4Ka54Ka-4Ka44Kaq4Ka-4Kak4Ka-4KayLCDgprngpqzgpr_gppfgpp7gp43gppw!5e0!3m2!1sen!2sbd!4v1686234041758!5m2!1sen!2sbd" width="300" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <form onSubmit={addSubmit} data-aos="fade-down-left">
                    <div className="card-body w-full">
                        <div className="form-control">
                            <input type="text" placeholder="Your name" className="input input-bordered" name='name'required/>
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Email Address" className="input input-bordered" name='email'required/>
                        </div>
                        <div className="form-control">
                            <input type="text" placeholder="Subject" className="input input-bordered" name='subject' required/>
                        </div>
                        <div className="form-control">
                            <textarea className="textarea textarea-accent" placeholder="Your message" name='message' required>
                            </textarea>
                        </div>
                    </div>
                    <div className='mb-8 text-center'>
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Please Submit</button>
                    </div>
                </form>
            </div>
            </div>
        </section>
    );
};

export default ContactUs;