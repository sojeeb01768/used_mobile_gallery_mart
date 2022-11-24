import React from 'react';
import Banner from '../Banner/Banner';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div className='m-5'>
            <Banner></Banner>
            <CustomerFeedback></CustomerFeedback>
            <Categories></Categories>
        </div>
    );
};

export default Home;