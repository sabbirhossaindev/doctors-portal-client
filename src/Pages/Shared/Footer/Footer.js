import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png';

const Footer = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm + '/' + yyyy;
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover'
            }}
        className="p-10 shadow-2xl rounded-xl">
            <div className='footer justify-around'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/appointment" className="link link-hover">Teeth Orthodontics</Link>
                    <Link to="/appointment" className="link link-hover">Cosmetic Dentistry</Link>
                    <Link to="/appointment" className="link link-hover">Teeth Cleaning</Link>
                    <Link to="/appointment" className="link link-hover">Cavity Protection</Link>
                    <Link to="/appointment" className="link link-hover">Pediatric Dental</Link>
                    <Link to="/appointment" className="link link-hover">Oral Surgery</Link>
                </div>
                <div>
                    <span className="footer-title">Patient management</span>
                    <Link to="/home" className="link link-hover">Home</Link>
                    <Link to="/about" className="link link-hover">About us</Link>
                    <Link to="/home" className="link link-hover">Service</Link>
                    <Link to="/appointment" className="link link-hover">Appointment</Link>
                    <Link to="/home" className="link link-hover">Contact</Link>
                    <Link to="/reviews" className="link link-hover">Reviews</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link>
                    <Link to="/" className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='text-center mt-32'>
                <p className='text-xl font-bold text-secondary'>Copyright {formattedToday} - All right reserved by ©  Doctor's Portal Ltd {new Date().getFullYear()}.</p>
            </div>
        </footer>
    );
};

export default Footer;