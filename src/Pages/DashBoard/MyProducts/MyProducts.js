import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';

const MyProducts = () => {

    const { data: products = [], refetch } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('https://used-mobile-gallery-server.vercel.app/products');
            const data = await res.json();
            return data;
        }
    })

    const [deletingProduct, setDeletingProduct] = useState(null);

    const closeModal = () => {
        setDeletingProduct(null);
    }

    const handleDeleteProduct = (product) => {
        fetch(`https://used-mobile-gallery-server.vercel.app/products/${product._id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {

                    refetch();
                    toast.success(`${product.deviceName}Deleted Successful`)
                }
            })
    }

    return (
        <div>
            <h2 className='text-center font-bold text-3xl my-5'>My Products</h2>

            <table className="table w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
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
                                    <img alt='' src={product?.img} />
                                </div>
                            </div></td>
                            <td>{product?.deviceName}</td>
                            <td>{product?.sellingPrice}</td>
                            <td>
                                <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-error  text-white">Delete</label>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure`}
                    message={`Parmanently Delete ${deletingProduct.deviceName}`}
                    closeModal={closeModal}
                    successAction={handleDeleteProduct}
                    modalData={deletingProduct}
                    successButtonName="Delete"
                >

                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProducts;