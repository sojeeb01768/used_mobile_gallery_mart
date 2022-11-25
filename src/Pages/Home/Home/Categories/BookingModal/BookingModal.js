import React from 'react';

const BookingModal = ({ productData, setProductData }) => {
    // const {deviceName } = productData;
    // console.log(productData);

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const deviceName = productData?.deviceName;
        const price = productData?.sellingPrice;
        const buyerName = form.name.value;
        const buyerEmail = form.email.value;
        const buyerPhone = form.phone.value;
        const meetLocation = form.meetLocation.value;
        const booking = {
            deviceName,
            price,
            buyerName,
            buyerEmail,
            buyerPhone,
            meetLocation
        }

        //when we send data to server
        // then a success toast show modal will be empty
        console.log(booking);
        setProductData(null)
    }

    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold">{productData?.deviceName}</h3>
                    <form onSubmit={handleBooking} className='my-10'>
                        <p className='ml-5'><small>Device name</small></p>
                        <input type="text" placeholder="" disabled value={productData?.deviceName} className="input input-bordered input-info w-full mt-2" />
                        <p className='ml-5'><small>Price</small></p>
                        <input type="text" placeholder="" disabled value={productData?.sellingPrice} className="input input-bordered input-info w-full mt-2" />
                        <p className='ml-5'><small>Buyer Name</small></p>
                        <input name='name' type="text" placeholder="" className="input input-bordered input-info w-full mt-2" />
                        <p className='ml-5'><small>Buyer Email</small></p>
                        <input name='email' type="email" placeholder="" className="input input-bordered input-info w-full mt-2" />
                        <input name='phone' type="text" placeholder="Phone" className="input input-bordered input-info w-full mt-2" />
                        <input name='meetLocation' type="text" placeholder="Meeting Location" className="input input-bordered input-info w-full mt-2" />
                        <br />
                        <input className='btn btn-primary w-full mt-2' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;