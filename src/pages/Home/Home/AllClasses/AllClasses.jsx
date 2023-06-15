import React, { useEffect, useState } from 'react';
import useAuth from '../../../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AllClasses = () => {
    const [allClasses, setClasses] = useState(null)
    const { user } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/class/approved`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data)
            })
    }, [])



    const handleSelect = (approvedClass) => {
        if (user && user.email) {
            const cartItem = {
                classId: approvedClass._id,
                name: approvedClass.className,
                image: approvedClass.classImage,
                price: approvedClass.price,
                email: user.email,
                info: "payment pending",
            };
            console.log(cartItem);
            fetch(`${import.meta.env.VITE_API_URL}/carts`, {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(cartItem),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {


                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Class Selected successfully ",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
        } else {
            Swal.fire({
                title: "Please Login First",
                text: "You won't selected without login/signUp",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login",
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login");
                }
            });
        }
    };


    return (
        <div className='bg-gradient-to-r from-[#4b4052] to-[#590f0f]'>

            <div className='grid grid-cols-3 gap-5  '>

                {
                    allClasses?.map((classes) => (
                        <div key={classes._id} className="card w-80 bg-base-100 shadow-xl mb-3">
                            <figure><img src={classes.classImage} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    {classes.className}

                                </h2>
                                <p>{classes.InstructorName}</p>
                                <div className="card-actions justify-end">
                                    <p>Price:${classes.price}</p>
                                    <button onClick={() => handleSelect(classes)} className="btn btn-outline">Select</button>
                                </div>
                            </div>
                        </div>


                    ))
                }
            </div>
        </div>
    );
};

export default AllClasses;