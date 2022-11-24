import React from 'react';
import Banner from '../Banner/Banner';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import Categories from './Categories/Categories';

const Home = () => {
    return (
        <div className='my-5'>
            <Banner></Banner>
            <Categories></Categories>
            <CustomerFeedback></CustomerFeedback>
        </div>
    );
};

export default Home;