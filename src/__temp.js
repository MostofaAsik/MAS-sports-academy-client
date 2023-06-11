import { useQuery } from "@tanstack/react-query";

import { Toaster, toast } from "react-hot-toast";
import Swal from "sweetalert2";

const ManageClasses = () => {
    const { data: classes = [], refetch } = useQuery(["students"], async () => {
        const res = await fetch("http://localhost:5000/classes");
        return res.json();
    });
    // console.log(classes);

    const handleApproved = (course) => {
        fetch(`http://localhost:5000/classes/approved/${course._id}`, {
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
    const handleDenied = (course) => {
        fetch(`http://localhost:5000/classes/denied/${course._id}`, {
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
        // console.log(course);
    };

    ///

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
                fetch(`http://localhost:5000/classes/${course._id}`, {
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
                    <thead className="bg-[#007cff] bg-opacity-20">
                        <tr>
                            <th>
                                <label>
                                    <p>#</p>
                                </label>
                            </th>
                            <th className="text-center">Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th className="text-center">Change Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="bg-[#007cff] bg-opacity-10">
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
                                                    alt="Avatar Tailwind CSS Component"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{course.className}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>{course.instructorEmail}</td>
                                <td>{course.status}</td>
                                <td className="flex flex-col items-center justify-center space-y-1">
                                    {course.status === "pending" || course.status === "denied" ? (
                                        <button
                                            onClick={() => handleApproved(course)}
                                            className="btn btn-sm btn-success text-white"
                                        >
                                            Approved
                                        </button>
                                    ) : (
                                        <button
                                            disabled
                                            onClick={() => handleApproved(course)}
                                            className="btn btn-sm btn-success text-white"
                                        >
                                            Approved
                                        </button>
                                    )}
                                    {course.status === "pending" ||
                                        course.status === "approved" ? (
                                        <button
                                            onClick={() => handleDenied(course)}
                                            className="btn btn-sm btn-error text-white"
                                        >
                                            Denied
                                        </button>
                                    ) : (
                                        <button
                                            disabled
                                            onClick={() => handleDenied(course)}
                                            className="btn btn-sm btn-error text-white"
                                        >
                                            Denied
                                        </button>
                                    )}
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(course)}
                                        className="btn btn-ghost btn-xs bg-[red] text-white"
                                    >
                                        Delete
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Toaster />
            </div>
        </div>
    );
};

export default ManageClasses;


