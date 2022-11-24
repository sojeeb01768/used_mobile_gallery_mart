import React, { useEffect, useState } from 'react';
import Category from './Category';

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=> res.json())     
        .then(data=>setCategories(data))
    },[])

    return (
        <div className='m-5'>
            <h2 className='text-center text-3xl font-semibold my-10'>Product Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categories.map(category=> <Category
                    key={category._id}
                    singleCategory={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;