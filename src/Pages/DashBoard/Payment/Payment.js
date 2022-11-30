import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Loading from '../../Shared/Loading/Loading';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
// console.log(stripePromise);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === 'loading') {
        return <Loading></Loading>
    }
    // console.log(booking);
    return (
        <div>
            <h2 className='text-3xl text-center font-semibold my-5'>Payment for {booking?.deviceName}</h2>
            <p className='text-xl text-center'>Please pay <strong>TK: {booking?.price}</strong> for your product.</p>
            <div className='w-96 my-10 card border mx-auto p-5 text-end'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;