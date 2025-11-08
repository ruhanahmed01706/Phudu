import React, { useEffect, useState } from 'react';
import { getStoreBook } from '../Utilitis/utilitis';
import { useLoaderData } from 'react-router';
import Doctor from '../Doctors/Doctor';

const Booking = () => {
    const [bookedDoctors, setBookedDoctors] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const storedIds = getStoreBook(); // e.g. [1, 3, 5]
        const myBookedDoctors = data.filter((doctor) => storedIds.includes(doctor.id));
        setBookedDoctors(myBookedDoctors);
    }, [data]);

    return (
        <div className='my-6'>
            <h2 className='text-xl font-bold mb-4'>Booked Appointments: {bookedDoctors.length}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {bookedDoctors.map((doc) => (
                    <Doctor key={doc.id} doctordata={doc} />
                ))}
            </div>
        </div>
    );
};

export default Booking;
