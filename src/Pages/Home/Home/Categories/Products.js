import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal/BookingModal';

const Products = () => {
    const products = useLoaderData();

    const [productData, setProductData] = useState(null)

    return (
        <div>
            <h2 className='text-4xl font-semibold text-center mt-10'> Products</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-20 gap-10 mx-10'>
                {
                    products.map(product =>
                        <div
                            key={product._id}
                            className="card bg-base-100 shadow-md   ">
                            <figure><img src={product.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.deviceName}</h2>
                                <p>Market Price: {product.originalPrice} Tk</p>
                                <p>Selling Price: {product.sellingPrice} Tk</p>
                                <p>Using period: {product.usingPeriod} </p>
                                <p>Location: {product.location} </p>
                                <p>Condition: {product.deviceCondition} </p>

                                <div className="card-actions justify-center">
                                    <label
                                        onClick={() => setProductData(product)}
                                        htmlFor="booking-modal"
                                        className="btn btn-primary"
                                    >Booking Now</label>
                                    {
                                        productData &&
                                        <BookingModal
                                            productData={productData}
                                            setProductData={setProductData}
                                        ></BookingModal>
                                    }
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Products;