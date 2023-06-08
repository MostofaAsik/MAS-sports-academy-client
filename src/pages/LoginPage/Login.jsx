import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { FcGoogle } from 'react-icons/fc'
import { useForm } from "react-hook-form";
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const { logIn, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'



    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        setSuccess('')
        logIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setSuccess("Successfully Login")
                setError('')
                reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
                setError("Email and Password does not match")
            })

    }




    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (


        <div className="hero min-h-screen  bg-gradient-to-r from-[#786c53] to-[#89a293]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center   p-6 bg-gradient-to-r from-[#786c53] to-[#89a293]">
                    <h1 className="text-5xl font-bold mb-6">Login now!</h1>
                    <img src={logo} className='w-[300px] h-auto' />

                    <p className='text-base-300 mt-5 pr-2'>If you new?
                        <Link to='/signup'><span className='bg-orange-600 p-2  text-black'> Register here</span> </Link>
                    </p>
                    <br /><br />
                </div>
                <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <p className='mb-2 text-red-600'> {error}</p>
                        <p className='mb-2 text-red-600'> {success}</p>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email'
                                    {...register("email", { required: true })}
                                    placeholder="Email" className="input input-bordered" />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? 'text' : 'password'} name='password'
                                    {...register("password", { required: true })}
                                    placeholder="Password" className="input input-bordered" />
                            </div>
                            <p onClick={() => setShow(!show)} >
                                {show ? <span>Hide Password</span> : <span>Show Password</span>}
                            </p>
                            <div className="form-control mt-6">
                                {/* <button className="btn btn-primary">Login</button> */}
                                <input className='btn btn-primary' type="submit" value="Login" />
                            </div>
                        </form>
                        <div>
                            <div className="divider">OR</div>
                        </div>
                        <div onClick={handleGoogleLogin} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>

                            <FcGoogle size={32} />

                            <p>Continue with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;