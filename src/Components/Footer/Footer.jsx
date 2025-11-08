import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png'
import { Camera } from 'lucide-react';



const Footer = () => {

    const link = <>
        <NavLink to={"/"}
            className={({ isActive }) =>
                isActive
                    ? "text-blue-600 underline font-semibold"
                    : " hover:text-blue-600"
            }

        ><li className='list-none'>Home</li></NavLink>
        <NavLink to={"/booking"}
            className={({ isActive }) =>
                isActive
                    ? "text-blue-600 underline font-semibold"
                    : " hover:text-blue-600"
            }

        ><li className='list-none'>My-Bookings</li></NavLink>
        <NavLink to={"/blog"}
            className={({ isActive }) =>
                isActive ? "text-blue-600 underline font-semibold" : "hover:text-blue-600"
            }

        ><li className='list-none'>Blogs</li></NavLink>
    </>
    return (
        <div>
            <div className='bg-base-200 shadow px-15 pt-15 w-full text-center'>
                <div className='flex gap-4 items-center mb-2 justify-center'>
                    <img className='w-8' src={logo} alt="" />
                    <a className=" text-2xl font-bold">Phudu</a>
                </div>
                <div className='flex justify-center gap-6 border-b pb-3'>{link}</div>
                <div className='flex justify-center gap-4 mt-3'>
                    <a href="https://www.linkedin.com/in/md-ruhan-ahmed-21a692390/"><i class="fa-brands text-3xl  bg-white text-blue-500 fa-linkedin"></i></a>
                    <a href="https://github.com/"><i class="fa-brands text-3xl    fa-square-github"></i></a>
                    <a href="https://www.facebook.com/md.ruhan.ahmed.533192"><i class="fa-brands text-3xl bg-white text-blue-500 fa-square-facebook"></i></a>
                </div>

            </div>
             <footer class="text-center bg-orange-500 py-2 border-t text-white text-sm">
                © 2025 <span class="font-semibold text-blue-600">Ruhan Ahmmed</span>. All rights reserved.
            </footer>
        </div>


    );
};

export default Footer;