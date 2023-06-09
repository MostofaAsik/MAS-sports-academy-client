
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/users`)
        return res.json()
    })

    const handleMakeAdmin = (user) => {
        fetch(`${import.meta.env.VITE_API_URL}/users/admin/${user._id}`, {
            method: "PATCH"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }


    const handleMakeInstructor = (user) => {

    }




    return (
        <div>
            <Helmet>
                <title>AllUsers ||MAS Sports Academy</title>
            </Helmet>
            <h2 className='text-3xl text-lime-800 text-center mb-2'>All Users:{users?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Instructor Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {
                                        user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-outline btn-secondary ">admin</button>
                                    }
                                </td>
                                <td>

                                    {user.role === 'instructor' ? 'instructor' : <button
                                        onClick={() => handleMakeInstructor(user)}
                                        className="btn btn-outline btn-secondary  ">instructor</button>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;