import React from 'react';
import Banner from '../../components/Header/Banner';
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const booksData = useLoaderData()
    return (
       <>
        <main className="main py-24">
            <Banner></Banner>
            <Books booksData={booksData}></Books>
        </main>
            
       </>
    ); 
};

export default Home;