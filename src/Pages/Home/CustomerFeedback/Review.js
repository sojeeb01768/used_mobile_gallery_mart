import React from 'react';

const Review = ({ singleReview }) => {

    const { name, image, review } = singleReview;
    return (
        <div className="card mx-5 bg-base-100">
            <div className="card-body p-0">
                <div className="avatar">
                    <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt='' />
                    </div>
                    <p className='ml-5 mt-5 text-xl'>{name}</p>
                </div>
                <div className="card-actions justify-end mt-2">
                    <p>{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;