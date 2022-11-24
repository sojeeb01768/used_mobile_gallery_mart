import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Products = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 my-20 gap-10 mx-10'>
            {
                products.map(product =>
                    <div
                        key={product._id}
                        className="card bg-base-100 shadow-xl   ">
                        <figure><img src={product.img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product.deviceName}</h2>
                            <p>Market Price: {product.originalPrice} Tk</p>
                            <p>Selling Price: {product.sellingPrice} Tk</p>
                            <p>Using period: {product.usingPeriod} </p>
                            <p>Location: {product.location} </p>
                            <p>Condition: {product.deviceCondition} </p>

                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Products;