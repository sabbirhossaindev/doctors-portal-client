import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/banner/1.jpg';
import img2 from '../../assets/banner/2.jpg';
import img3 from '../../assets/banner/3.jpg';
import img4 from '../../assets/banner/4.jpg';
import img5 from '../../assets/banner/5.jpg';
import img6 from '../../assets/banner/6.jpg';
import person from '../../assets/images/doctor.png';
import './About.css';

const About = () => {
    return (
        <div className='p-3'>

            <div className="carousel w-full">
            <div id="item1" className="carousel-item w-full carousel-img relative">
                <img src={img1} alt="" className="w-full rounded-xl about-img" />
            </div> 
            <div id="item2" className="carousel-item w-full carousel-img relative">
                <img src={img2} alt="" className="w-full rounded-xl about-img" />
            </div> 
            <div id="item3" className="carousel-item w-full carousel-img relative">
                <img src={img3} alt="" className="w-full rounded-xl about-img" />
            </div> 
            <div id="item4" className="carousel-item w-full carousel-img relative">
                <img src={img4} alt="" className="w-full rounded-xl about-img" />
            </div>
            <div id="item5" className="carousel-item w-full carousel-img relative">
                <img src={img5} alt="" className="w-full rounded-xl about-img" />
            </div>
            <div id="item6" className="carousel-item w-full carousel-img relative">
                <img src={img6} alt="" className="w-full rounded-xl about-img" />
            </div>
            
            </div> 
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a> 
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
                <a href="#item6" className="btn btn-xs">6</a>
            </div>

            <section className='my-10'>
            {/* <Helmet>
                <title>Home</title>
            </Helmet> */}
                <div>
                    <p className="text-2xl text-center font-bold text-rose-600">About Me</p>
                </div>
                <div className="hero my-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className=' w-full' data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
                            <img src={person} alt="" className="w-4/5 h-full rounded-lg shadow-2xl person" />
                        </div>
                        <div className='w-full' data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">
                            <h1 className="my-5 text-5xl font-bold">About My Self </h1>
                            <p className="py-6 text-xl text-gray-500">I am a maxillofacial surgeon , I finished my B.D.S from chennai in the year 2012 and completed my M.D.S in oral and maxillofacial surgery  in the year 2017. Here in this clinic we are provide all dental treatments from root canal treatment's , Dental implant to complex maxillofacial surgery , Full mouth rehab. Call us to enquire about your dental wellbeing.</p>
                            <Link className='btn btn-secondary' to='/appointment'><button className="text-white text-xl inline-flex justify-center items-center">See More </button></Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;