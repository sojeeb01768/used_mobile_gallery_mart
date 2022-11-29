import React from 'react';
import { useForm } from 'react-hook-form';

const AddAProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleAddProduct = (data) => {
        console.log(data);
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
                {/* <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email"
                        {...register("email", { required: "Email is required" })}
                        className="input input-bordered w-full " />
                    {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                </div> */}
                <div className='mt-5 grid gap-2  '>
                    <p>Product Condition</p>
                    <select className=' p-3 bg-zinc-200 rounded ' {...register("deviceCondition")}>
                        <option value="excellent">Excellent</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file"
                        {...register("img", { required: "Photo is required" })}
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