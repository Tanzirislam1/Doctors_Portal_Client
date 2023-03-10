import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logOut = () => {
        signOut(auth);

        /* when user signOut then usally token are saved in local storage but when user are signOut then remove the token form local storage  */
        localStorage.removeItem('accessToken');

    }
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/review">Reviews</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
        {user && <li><Link to="/dashboard">Dashboard</Link></li>}
    </>

    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Doctors Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <button onClick={logOut} className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary'>SignOut</button> : <Link className='btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary' to="/login">Login</Link>}
                    
                    {/* <label for="my-drawer" class="btn btn-primary drawer-button sm:block lg:hidden">Open drawer</label> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;