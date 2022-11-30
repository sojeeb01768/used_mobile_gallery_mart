import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;



    const handleAddProduct = (data) => {
        // console.log(data);
        console.log(data.image[0]);
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {
                        deviceName: data.deviceName,
                        id: data.id,
                        img: imgData.data.url,
                        location: data.location,
                        sellerName: data.sellerName,
                        sellerPhone: data.sellerPhone,
                        sellingPrice: data.sellingPrice,
                        usingPeriod: data.usingPeriod,
                        deviceCondition: data.deviceCondition

                    }
                    // save product info to database 
                    fetch('https://used-mobile-gallery-server.vercel.app/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success('Product Added Successfully')
                        })
                }
            })
    }
    return (
        <div className='w-96 p-5 border mx-auto mt-10'>
            <h2 className='text-center text-4xl font-semibold my-5'>Add A Product</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text"
                        {...register("sellerName", { required: "Name is required" })}
                        className="input input-bordered w-full " />
                    {errors.sellerName && <p className='text-red-500' role="alert">{errors.sellerName?.message}</p>}

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">device Name</span>
                    </label>
                    <input type="text"
                        {...register("deviceName", { required: "Device Name is required" })}
                        className="input input-bordered w-full " />
                    {errors.deviceName && <p className='text-red-500' role="alert">{errors.deviceName?.message}</p>}

                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text"
                        {...register("sellingPrice", { required: "Price is required" })}
                        className="input input-bordered w-full " />
                    {errors.sellingPrice && <p className='text-red-500' role="alert">{errors.sellingPrice?.message}</p>}

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Mobile No</span>
                    </label>
                    <input type="text"
                        {...register("sellerPhone", { required: "Mobile no is required" })}
                        className="input input-bordered w-full " />
                    {errors.sellerPhone && <p className='text-red-500' role="alert">{errors.sellerPhone?.message}</p>}

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Location</span>
                    </label>
                    <input type="text"
                        {...register("location", { required: "Location is required" })}
                        className="input input-bordered w-full " />
                    {errors.location && <p className='text-red-500' role="alert">{errors.location?.message}</p>}

                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Using Period</span>
                    </label>
                    <input type="text"
                        {...register("usingPeriod", { required: "Using Period is required" })}
                        className="input input-bordered w-full " />
                    {errors.usingPeriod && <p className='text-red-500' role="alert">{errors.usingPeriod?.message}</p>}

                </div>
                <div className='mt-5 grid gap-2  '>
                    <p>Product Condition</p>
                    <select className=' p-3 bg-zinc-200 rounded ' {...register("deviceCondition")}>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </select>
                </div>
                <div className='mt-5 grid gap-2  '>
                    <p>Product Category</p>
                    <select className=' p-3 bg-zinc-200 rounded ' {...register("id")}>
                        <option value="01">Android</option>
                        <option value="02">IOS</option>
                        <option value="03">Button</option>
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        {...register("image", { required: "Photo is required" })}
                        className="input input-bordered w-full " />
                    {errors.img && <p className='text-red-500' role="alert">{errors.img?.message}</p>}

                </div>

                <input className='btn btn-primary w-full my-5' value='Add Product' type="submit" />
                {
                    // signUpError && <p className='text-red-600'>{signUpError}</p>
                }
            </form>
        </div>
    );
};

export default AddAProduct;