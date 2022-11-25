import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Category from './Category';

const Categories = () => {
    // alternative of useEffect for loading data from server
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
            .then(res => res.json())
    })

    return (
        <div className='m-5'>
            <h2 className='text-center text-3xl font-semibold my-10'>Product Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    categories.map(category => <Category
                        key={category._id}
                        singleCategory={category}
                    ></Category>)
                }
            </div>

        </div>
    );
};

export default Categories;