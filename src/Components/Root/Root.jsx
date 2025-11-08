import React from 'react';
import Nav from '../nav/Nav';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <Nav></Nav>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;