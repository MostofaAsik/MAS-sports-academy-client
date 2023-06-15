import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';


const MyClass = () => {
    const { user } = useAuth()



    console.log(user);
    const { data: classes = [] } = useQuery(["class", user?.email], async () => {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/class/${user?.email}`);
        return res.data;
    });
    console.log(classes, ['data']);

    // fetch(`${import.meta.env.VITE_API_URL}/class/${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data, ["data"]);

    //     })



    return (
        <div>
            <h2>My Class {classes.length}</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-[#ff0077] bg-opacity-20">
                            <tr>
                                <th>
                                    #
                                </th>
                                <th className="text-center">Name</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Update</th>

                            </tr>
                        </thead>
                        <tbody className="bg-[#060e17] bg-opacity-10">
                            {/* row 1 */}

                            {classes?.map((course, index) => (
                                <tr className="border-b-2 border-gray-500" key={course._id}>
                                    <th>

                                        <p>{index + 1}</p>

                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img
                                                        src={course.classImage}
                                                        alt="Avatar Tailwind CSS Component"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{course.className}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{course.email}</td>
                                    <td>{course.status}</td>
                                    <td>
                                        <Link to='dashboard/update'>
                                            <button className='btn btn-ghost'>Update</button>
                                        </Link>
                                    </td>
                                </tr>
                            ))}



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyClass;