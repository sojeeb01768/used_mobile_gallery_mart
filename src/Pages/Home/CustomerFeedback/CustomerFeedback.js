import React from 'react';
import Review from './Review';

const CustomerFeedback = () => {

    const reviews = [
        {
            _id: 1,
            name: 'Lokman ali',
            review: 'The UMG Mart App is a great way to shop for all your favorite brands and products. The interface is user-friendly and the app is constantly updating with new arrivals and promotions.',
            image: 'https://media-exp1.licdn.com/dms/image/C5103AQGq_uojkTeCWQ/profile-displayphoto-shrink_800_800/0/1582997338743?e=2147483647&v=beta&t=y21Po5a5pu3OCXZZErTCkt7m1shX3UGRqwyDKE4P8-M'
        },
        {
            _id: 2,
            name: 'Habib',
            review: 'The customer care service is very helpful as well as there employees... Thank you very much for your kind reply information and ensuring the customer with the process...',
            image: 'https://media-exp1.licdn.com/dms/image/C5603AQGx6EZgijunpQ/profile-displayphoto-shrink_800_800/0/1661084028151?e=1673481600&v=beta&t=hJQMc8BAm3LDC87fCBt2HQNyLxB_-lX8TsKHbqPfPtM'
        },
        {
            _id: 3,
            name: 'Nafis iqbal',
            review: 'I love how I can easily compare prices and find the best deals on the products I want. The delivery is always on time and I never have any problems with the quality of the products.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXDoz7K5zg0TD8f31yukdG0JOrRhncSJMT5pghuzNRp2paDiHvuxyCshN5vobNuwIjYOw&usqp=CAU'
        },

    ]

    return (
        <section className='shadow-sm my-10'>
            <div className='py-5'>
                <h2 className='text-3xl font-semibold  text-center'>Our Happy Customers</h2>
            </div>
            <div className='grid grid-cols-1 gap-6'>
            {
                reviews.map(review=><Review
                key={review._id}
                singleReview = {review}
                ></Review>)
            }
            </div>
        </section>
    );
};

export default CustomerFeedback;