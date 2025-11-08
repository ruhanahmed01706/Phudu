import React from 'react';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router';

const Nav = () => {
    const link =<>
    <NavLink to={"/"}
    className={({ isActive }) =>
    isActive
      ? "text-blue-600 underline font-semibold"
      : " hover:text-blue-600"
  }
    
    ><li>Home</li></NavLink>
    <NavLink to={"/booking"}
    className={({ isActive }) =>
    isActive
      ? "text-blue-600 underline font-semibold"
      : " hover:text-blue-600"
  }
    
    ><li>My-Bookings</li></NavLink>
    <NavLink to={"/blog"}
    className={({isActive})=>
        isActive?"text-blue-600 underline font-semibold":"hover:text-blue-600"
 }
    
    ><li>Blogs</li></NavLink>
    </>
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-30 p-2 shadow">
                        
                        {link}

                    </ul>
                </div>
                <div className='flex gap-2 items-center'>
                    <img className='w-8' src={logo} alt="" />
                    <a className=" text-2xl font-bold">Phudu</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-6 ">
                    {link}
                </ul>
            </div>
            <div className="navbar-end">
                <button className='px-6  rounded-full text-white py-2 bg-blue-600'>Emargency</button>
            </div>
        </div>
    );
};

export default Nav;