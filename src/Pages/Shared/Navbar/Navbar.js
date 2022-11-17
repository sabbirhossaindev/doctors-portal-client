import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../contexts/AuthProvider';
// import './Navbar.css';

const Navbar = () => {

    // const [darkMode, setDarkMode] = useState(false);

    const { user, logOut } = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
        .then(toast.success('Log Out Successful !'))
        .catch(error => toast.error(error.message))
    }

    const menuItem = <>
        {/* <div className={darkMode ? "dark-mode" : "light-mode"}>
            <div className="container mt-4">
                <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                    <div className="switch-checkbox">
                        <label className="switch">
                            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                            <span className="slider round"> </span>
                        </label>
                    </div>
                <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
            </div>
            <div>
                <h1>{darkMode ? "Dark" : "Light"}</h1>
            </div>
        </div> */}

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
                <Link to='/' className="btn btn-ghost normal-case text-2xl text-primary">Doctor's Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        </div>
    );
};

export default Navbar;