import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

const AllSeller = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?userType=seller');

            const data = await res.json();
            return data;
        }
    })

    const handleMakeAdmin = (id) => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make Admin Successfully')
                    refetch();
                }
            })

    }

    return (
        <div>
            <h2>All Seller</h2>
            <div>
                <h2 className='text-center text-4xl my-10 font-bold'>All Buyers</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Buyer</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <!-- row 1 --> */}
                            {
                                users.map((user, i) => <tr
                                    key={user._id}
                                >
                                    <th>{i + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.userType !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-primary btn-xs text-white'>Buyer</button>}</td>
                                    <td><button className='btn btn-error btn-xs text-white'>Delete</button> </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSeller;