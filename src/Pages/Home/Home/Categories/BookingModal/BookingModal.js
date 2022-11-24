import React from 'react';

const BookingModal = ({ productData }) => {
    // const { deviceCondition, deviceName, id, img, location, originalPrice
    //     , sellingPrice, usingPeriod, _id } = product;
    console.log(productData);
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{productData?.deviceName}</h3>
                    <form className='my-10'>
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full mt-2" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full mt-2" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full mt-2" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full mt-2" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full mt-2" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full mt-2" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full mt-2" />
                        <input type="text" placeholder="Type here" className="input input-bordered input-info w-full mt-2" />
                        <br />
                        <input className='btn btn-primary w-full mt-2' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;