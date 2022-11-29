import { useQuery } from '@tanstack/react-query';
import React from 'react';

const MyProducts = () => {

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/products');

            const data = await res.json();
            return data;
        }
    })



    return (
        <div>
            <h2>my products {products.length}</h2>

            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <!-- row 1 --> */}
                    {
                        products?.map((product, i) => <tr
                            key={product._id}
                        >
                            <th>{i + 1}</th>
                            <td><div className="avatar">
                                <div className="w-16 rounded-full">
                                    <img alt='' src={product?.img}/>
                                </div>
                            </div></td>
                            <td>{product?.deviceName}</td>
                            <td>{product?.sellingPrice}</td>
                            {/* <td>{ product?.userType!=='admin' &&  <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-primary btn-xs text-white'>Buyer</button>}</td> */}
                            <td><button className='btn btn-error btn-xs text-white'>Delete</button> </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyProducts;