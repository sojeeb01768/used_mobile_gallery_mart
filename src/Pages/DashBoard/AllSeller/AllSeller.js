import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const AllSeller = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users?userType=seller');

            const data = await res.json();
            return data;
        }
    })

    // deleting function
    const [deletingUser, setDeletingUser] = useState(null);
    const closeModal = () => {
        setDeletingUser(null);
    }

    const handleDeleteUser = (user) => {
        fetch(`http://localhost:5000/users/${user._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data);
                    refetch();
                    toast.success(`${user.name}Deleted Successful`)
                }
            })
    }



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

            <div>
                <h2 className='text-center text-4xl my-10 font-bold'>All Seller</h2>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>User Type</th>
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
                                    <td>{user?.userType}</td>
                                    {/* <td>{user?.userType !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-primary btn-xs text-white'>Seller</button>}</td> */}
                                    <td>

                                        <label onClick={() => setDeletingUser(user)} htmlFor="confirmation-modal" className="btn btn-error  text-white">Delete</label>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
                {
                    deletingUser && <ConfirmationModal
                        title={`Are you sure`}
                        message={`Parmanently Delete ${deletingUser.name}?`}
                        closeModal={closeModal}
                        successAction={handleDeleteUser}
                        modalData={deletingUser}
                        successButtonName="Delete"
                    >

                    </ConfirmationModal>
                }
            </div>
        </div>
    );
};

export default AllSeller;