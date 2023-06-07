import React from 'react';
import logo from "../../assets/images/logo.png"
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen  bg-gradient-to-r from-[#786c53] to-[#89a293]">
            <div className="hero-content flex-col lg:flex-row-reverse w-full ">
                <div className="text-center p-6 bg-gradient-to-r from-[#786c53] to-[#89a293]">
                    <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                    <img src={logo} className='w-[300px] h-auto' />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Show Password</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="button" value="Login" />
                            </div>
                        </form>
                        <div className="divider"></div>
                        <div className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>

                            <FcGoogle size={32} />

                            <p>Continue with Google</p>
                        </div>
                        <p className='px-6 text-sm text-center text-gray-400'>
                            Dont have an account yet?
                            <Link
                                to='/signup'
                                className='hover:underline hover:text-rose-500 text-gray-600'
                            >
                                Sign up
                            </Link>

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;