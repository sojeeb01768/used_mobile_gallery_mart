import React from 'react';


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content  grid grid-cols-1 lg:grid-cols-2 gap-5">
                <img
                    src='https://techcrunch.com/wp-content/uploads/2022/09/Apple-iphone-14-Pro-review-1.jpeg?resize=1200,900'
                    className="  rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Used Mobile Gallery Mart</h1>
                    <p className="py-6">“UMG MART truly cares about customer success in a way that I personally had not experienced with other platforms.”
                        Get the best experice of used mobile phone. trustable site for selling original used fresh phone! Get it now!</p>

                </div>
            </div>
        </div>
    );
};

export default Banner;