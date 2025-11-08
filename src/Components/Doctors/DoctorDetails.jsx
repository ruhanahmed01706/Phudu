import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../Utilitis/utilitis';

const DoctorDetails = () => {
    const docdata = useLoaderData();
    const { id } = useParams();
    const doctor = docdata.find((d) => d.id === parseInt(id));

    const handleMarkRead = (id) => {
        addToStoreDB(parseInt(id));
    };

    return (
        <div>
            <div className='bg-white shadow rounded-2xl py-5 mb-6'>
                <div className='text-center w-11/12 md:w-8/12 mx-auto'>
                    <h2 className='text-xl font-bold'>Doctor’s Profile Details</h2>
                    <p className='text-gray-400 py-2'>
                        Each of our doctors is dedicated to providing high-quality healthcare through professional expertise, years of experience, and a compassionate approach to patient care.
                    </p>
                </div>
            </div>

            <div className='bg-white md:flex md:gap-5 shadow rounded-2xl p-4'>
                <div className='md:w-1/2'>
                    <img className='rounded-2xl w-full' src={doctor.image} alt="doctor" />
                </div>
                <div className='md:w-1/2'>
                    <h2 className='text-xl font-semibold'>{doctor.name}</h2>
                    <p className='text-gray-400 py-2'>{doctor.degrees}</p>
                    <p className='font-semibold mb-2'>{doctor.college}</p>
                    <p className='border-y border-dashed py-1 mb-3'>Reg No: {doctor.regNo}</p>

                    <p className='mt-2'>
                        <span className='font-semibold'>Consultation Fee:</span>
                        <span className='text-blue-400 font-bold'> {doctor.fee} Taka</span>
                    </p>

                    <p className='mt-2'><span className='font-semibold'>Review:</span> {doctor.review}</p>

                    <button 
                        onClick={() => handleMarkRead(id)} 
                        className='bg-blue-200 text-blue-700 p-2 rounded-full w-full mt-4'>
                        Book Appointment Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;
