import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Banner from '../../components/Header/Banner';
import { Outlet } from 'react-router';


const Root = () => {
    return (
        <>
        <section className='bg-gray-50 text-black'>
        <Navbar></Navbar>
        <Banner></Banner>
        <Outlet></Outlet>
        </section>
        

        </>
    );
};

export default Root;