import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { logIn } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('');

    // for find the location of route to navigate
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err.message)
                setLoginError(err.message);
            });

    }

    return (
        <div className='h-[600px] flex justify-center items-center '>
            <div className='w-96 p-5 border'>
                <h2 className='text-5xl font-semibold text-center'> Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", { required: "Email is required" })}
                            className="input input-bordered w-full " />
                        {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}

                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'password must be atleast 6 digit' }
                                })}
                            className="input input-bordered w-full " />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}

                    </div>

                    <input className='btn btn-primary w-full my-5' value='Login' type="submit" />
                    <div className='text-red-600 text-center mb-2'>
                        {loginError && <p>{loginError}</p>}
                    </div>
                </form>
                <p className='text-center'>New to UMG Mart? <Link to='/signup'><span className='text-primary font-semibold'>Create New Account</span></Link></p>
                <div className="divider">OR</div>
                <button className='btn w-full btn-outline btn-primary'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;