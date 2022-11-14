import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
        .then(toast.success('Log Out Successful !'))
        .catch(error => toast.error(error.message))
    }

    const menuItem = <>
        <li><input type="checkbox" className="toggle toggle-md mt-4 mr-3 rounded-full" checked /></li>
        <li className='text-xl font-semibold'><Link to='/'>Home</Link></li>
        <li className='text-xl font-semibold'><Link to='/appointment'>Appointment</Link></li>
        <li className='text-xl font-semibold'><Link to='/about'>About</Link></li>
        <li className='text-xl font-semibold'><Link to='/reviews'>Reviews</Link></li>
        {
            user?.uid ?
            <>
                <li className='text-xl font-semibold'><Link to="/dashboard">Dashboard</Link></li>
                <button onClick={handleLogOut} className=' btn btn-accent text-xl font-semibold text-white'>Sign out</button>
            </>
            : <button className='text-xl font-semibold btn btn-accent text-white'><Link to="/login">Login</Link></button>}
        </>

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start flex justify-between lg:block w-full flex-row-reverse">
                <div className="dropdown dropdown-bottom dropdown-end">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    {menuItem}
                </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl text-primary">Doctor Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;