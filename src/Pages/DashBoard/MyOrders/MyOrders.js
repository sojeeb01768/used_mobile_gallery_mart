import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);

    const url = `https://used-mobile-gallery-server.vercel.app/bookings?email=${user?.email}`;

    const { data: bookings = [], isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h2 className="text-3xl text-center my-5">My Orders</h2>
            <p className='text-center'>User Name: <span className='font-semibold '>{user?.displayName}</span></p>
            <p className='text-center'>Email: <span className='font-semibold '>{user?.email}</span></p>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>index</th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            bookings &&
                            bookings?.map((booking, i) => <tr
                                key={booking._id}
                            >
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-circle w-14 h-14">
                                                <img src={booking?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {booking?.deviceName}
                                </td>
                                <td>
                                    {booking?.buyerName}
                                </td>
                                <td>
                                    {booking?.price}
                                </td>

                                <td>
                                    {
                                        booking?.price && !booking?.paid && <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                        ><button
                                            className='btn btn-primary btn-md'
                                        >Pay</button></Link>
                                    }
                                    {
                                        booking?.price && booking?.paid && <span className='text-green-500'>PAID</span>
                                    }
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;