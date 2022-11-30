import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
        <div>
            <p className='text-red-500 text-2xl text-center'>{error.statusText || error.message}</p>
            <img src="https://static.vecteezy.com/system/resources/previews/002/711/857/original/detective-holding-a-magnifying-glass-behind-404-text-error-404-page-not-found-system-maintenance-vector.jpg" alt="" />
        </div>
    );
};

export default DisplayError;