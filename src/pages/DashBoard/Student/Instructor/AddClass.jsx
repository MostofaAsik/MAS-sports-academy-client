import React from 'react';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../../../hooks/useAuth';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const AddClass = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        console.log(data)
        const { InstructorName, instructorImage, email, classImage, className, price, seat } = data

        const newClass = { InstructorName, instructorImage, email, className, classImage, price, seat, status: 'pending' }
        console.log(newClass);
        axiosSecure.post('/class', newClass)
            .then(data => {
                console.log(data);
                if (data.data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class Added Succesfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })


    };
    return (
        <div className='w-96 ' >
            <Helmet>
                <title>AddClass || Sports Academy</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex gap-3'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Class Name</span>
                        </label>
                        <input type="text" placeholder="Class Name"
                            {...register("className", { required: true })}
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instrutor Name</span>
                        </label>
                        <input type="text" placeholder="Instructor Name"
                            {...register("InstructorName", { required: true })}
                            defaultValue={user?.displayName}
                            readOnly
                            className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Email</span>
                    </label>
                    <input type="text" {...register("email", { required: true })}
                        defaultValue={user?.email} readOnly
                        placeholder="instructor Email" className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Class Image</span>
                    </label>
                    <input type="text" {...register("classImage", { required: true })} placeholder="Class Image" className="input input-bordered w-full" />
                </div>

                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Image</span>
                    </label>
                    <input type="text" {...register("instructorImage", { required: true })} placeholder="instructor Image"
                        defaultValue={user?.photoURL}
                        readOnly
                        className="input input-bordered w-full" />
                </div>

                <div className='flex gap-3'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seat</span>
                        </label>
                        <input type="text" {...register("seat", { required: true })} placeholder="Avialable Seat" className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price</span>
                        </label>
                        <input type="text" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                    </div>
                </div>

                <input type="submit" className='btn btn-primary mt-3' value="Add Class" />
            </form>
        </div>
    );
};

export default AddClass;