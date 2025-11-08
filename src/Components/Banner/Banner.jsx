import React from 'react';
import banner1 from '../../assets/banner-img-1.png'
const Banner = () => {
    return (
        <div>
            <div className='bg-white shadow rounded-2xl py-10'>
            <div className='text-center w-11/12  md:w-8/12 mx-auto py-3'>
                <h2 className='text-xl md:text-3xl font-bold'>Dependable Care, Backed by Trusted Professionals.</h2>
            <p className='text-gray-400 py-2'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            <input className='bg-white mb-3 shadow md:w-80 py-2 pl-4 pr-20 rounded-full mr-3' type="text" placeholder='Search any doctor...' /> <button className='px-5 rounded-full text-white py-1 bg-blue-600'>Search</button>
            </div>
            <div className='flex gap-2 md:gap-8 justify-center items-center'>
                <img className='md:w-85 w-40 md:h-60 h-30' src={banner1} alt="" />
                <img className='md:w-85 w-40 md:h-60 h-30' src={banner1} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;