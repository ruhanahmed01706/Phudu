import React from 'react';
import { Link } from 'react-router';

const Doctor = ({ doctordata }) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="px-6 pt-6 w-80 h-60 mx auto">
                <img
                    src={doctordata.image}
                    alt="Doctor"
                    className="rounded-xl h-full w-full"
                />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-semibold">{doctordata.name}</h2>
                <p className='border-b border-dashed pb-2 text-sm'>{doctordata.degrees}</p>
                <p>Reg No: {doctordata.regNo}</p>
                <div className="flex justify-center mt-3">
                    <Link to={`/doctordeta/${doctordata.id}`}>
                       <button className='py-2 px-3 rounded-full border md:px-10 hover:bg-blue-500 hover:text-white border-blue-400 text-blue-600 text-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'> View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Doctor;
