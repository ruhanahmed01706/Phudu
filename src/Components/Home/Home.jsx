import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router';

const Home = () => {
    const doctorsdata = useLoaderData()
    // console.log(doctorsdata);
    
    return (
        <div>
           <Banner></Banner>
           <Doctors doctorsdata={doctorsdata}></Doctors>
        </div>
    );
};

export default Home;