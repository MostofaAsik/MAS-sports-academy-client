import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FcGoogle } from 'react-icons/fc'
import logo from '../../assets/images/logo.png'
import { AuthContext } from '../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';


// const img_hosting_token = import.meta.env.VITE_Image_Upload_Token


const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const { createUser, googleLogin, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const from = location.state?.from?.pathname || '/'

    // const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        console.log(data)

        if (data.password.length < 6) {
            setError('Password minimum  6 charecters')
        }

        console.log(data.password === data.confirmpassword)

        setSuccess('')
        if (data.password === data.confirmpassword) {
            setError('Password and Confirmpassword didnot match')
            createUser(data.email, data.password)
                .then(result => {
                    const createdUser = result.user;
                    console.log(createdUser)
                    setSuccess("You are succesfull created an account")
                    setError('')
                    updateUserProfile(createdUser, data.name, data.photo)
                    const saveUser = { name: data.name, email: data.email }
                    fetch(`${import.meta.env.VITE_API_URL}/users`, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(saveUser)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                reset()
                                logOut()
                                navigate('/login')
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'User Created Succesfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })



                })
                .catch(error => {
                    console.log(error.message)

                })
        }
        setError('Password and Confirmpassword didnot match')

    };


    //update profile
    const updateUserProfile = (user, name, photo) => {
        updateProfile(user, {
            displayName: name, photoURL: photo
        })
            .then(() => {
                console.log("User Update Succesfully");

            })
            .catch(error => {
                console.log(error.message);
            })
    }


    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch(`${import.meta.env.VITE_API_URL}/users`, {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })




            })
            .catch(error => {
                console.log(error.message);
            })
    }


    return (

        <div className="hero min-h-screen bg-gradient-to-r from-[#786c53] to-[#89a293]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center   p-6 bg-gradient-to-r from-[#786c53] to-[#89a293] ">
                    <h1 className="text-5xl font-bold mb-6">Register now!</h1>
                    <img src={logo} className='w-[300px] h-auto ' />

                    <p className='text-base-300 mt-5'>ALready Have an Account?
                        <Link to='/login'><span className='text-primary'> LogIn here</span> </Link>
                    </p>

                    <div onClick={handleGoogleLogin} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>

                        <FcGoogle size={32} />

                        <p>Continue with Google</p>
                    </div>
                    <br /><br />
                </div>
                <div className="card  max-w-lg shadow-2xl bg-base-100">
                    <div className="card-body">
                        <p className='mb-2 text-red-600'> {error}</p>
                        <p className='mb-2 text-red-600'> {success}</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name"
                                    {...register("name", { required: true })}
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">PhotoUrl</span>
                                </label>
                                <input type="text" name='photo' placeholder="Url"
                                    {...register("photo", { required: true })} className="input input-bordered" required />

                            </div>



                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input type="email" name='email' placeholder="Email"
                                    {...register("email", { required: true })}
                                    className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password'
                                    {...register("password", { required: true })} placeholder="Password" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name='password'
                                    {...register("confirmpassword", { required: true })} placeholder="Password" className="input input-bordered" required />
                            </div>
                            {/* <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input type="file" name='photo' {...register("photo", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />

                            </div> */}

                            <div className="form-control mt-6">
                                {/* <button className="btn btn-primary">Login</button> */}
                                <input className='btn btn-primary' type="submit" value="Register" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;