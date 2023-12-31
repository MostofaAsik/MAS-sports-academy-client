import { useQuery } from "@tanstack/react-query";

import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";

const ManageClass = () => {
    const { data: classes = [], refetch } = useQuery(["students"], async () => {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/class`);
        return res.json();
    });
    // console.log(classes);

    const handleApproved = (course) => {
        fetch(`${import.meta.env.VITE_API_URL}/classes/approved/${course._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    // alert(`${student.name}, is admin now`);
                    refetch();
                    toast.success(`${course.className}, is approved now`);
                }
            });
    };
    //
    const handleDeny = (course) => {
        fetch(`${import.meta.env.VITE_API_URL}/classes/denied/${course._id}`, {
            method: "PATCH",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    // alert(`${student.name}, is admin now`);
                    refetch();
                    toast.success(`${course.className}, is denied`);
                }
            });

    };



    const handleDelete = (course) => {
        Swal.fire({
            title: "Are you sure?",
            text: `You want to delete ${course.className}?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/classes/${course._id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                "Deleted!",
                                `${course.className} is deleted`,
                                "success"
                            );
                        }
                    });
            }
        });
    };

    return (
        <div>
            <div className="">
                <h1 className="font-bold text-2xl px-6 py-4">
                    Total Pending Classes: {classes?.length}
                </h1>
                <div className="overflow-x-auto"></div>
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
                            <th className="text-center">Change Status</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#060e17] bg-opacity-10">
                        {/* row 1 */}
                        {classes?.map((course, index) => (
                            <tr className="border-b-2 border-gray-500" key={course._id}>
                                <th>
                                    <label>
                                        <p>{index + 1}</p>
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={course.classImage}
                                                    alt="pic"
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
                                <td className="flex flex-row gap-2 items-center justify-center space-y-1">
                                    {course.status === "pending" || course.status === "denied" ? (
                                        <button
                                            onClick={() => handleApproved(course)}
                                            className="btn btn-sm btn-outine text-black"
                                        >
                                            Approved
                                        </button>
                                    ) : (
                                        <button
                                            disabled
                                            onClick={() => handleApproved(course)}
                                            className="btn btn-sm btn-outline text-black"
                                        >
                                            Approved
                                        </button>
                                    )}
                                    {course.status === "pending" ||
                                        course.status === "approved" ? (
                                        <button
                                            onClick={() => handleDeny(course)}
                                            className="btn btn-sm btn-error text-white"
                                        >
                                            Denied
                                        </button>
                                    ) : (
                                        <button
                                            disabled
                                            onClick={() => handleDeny(course)}
                                            className="btn btn-sm btn-error text-white"
                                        >
                                            Denied
                                        </button>
                                    )}
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(course)}
                                        className="btn btn-ghost btn-xs bg-lime-500 text-white"
                                    >
                                        Delete
                                    </button>
                                </th>
                                <td><button className="btn btn-accent">Feedback</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Toaster />
            </div>
        </div>
    );
};

export default ManageClass;