import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ singleCategory }) => {
    const { categoryName, image } = singleCategory;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{categoryName}</h2>
                
                <div className="card-actions justify-end">
                    <Link to={`category/${singleCategory.id}`}><button className="btn btn-primary">See More</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Category;