import React, { useContext } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBookOpen, FaHome, FaWallet } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';
import { BsFillBookmarkCheckFill } from 'react-icons/bs';
import { AuthContext } from '../pages/Providers/AuthProvider';

const DashBoard = () => {
    const { user } = useContext(AuthContext)

    //TODO
    const isAdmin = true;

    //TODO
    const isInstructor = true


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-orange-400">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="menu p-4 w-80 h-full  text-2xl">

                    <div className='mb-20 text-xl'>
                        {user ? <>
                            <img className='w-[100px] h-[100px] rounded-full' src={user?.photoURL} alt="" />
                            <h2 className='mt-3 text-3xl'>Name:{user?.displayName}</h2>
                            <h3>Email:{user?.email}</h3>
                        </> : "Photo Asbe"}
                    </div>

                    {/* Sidebar content here */}
                    {/* all link here  */}

                    {
                        isAdmin ? <>
                            <li>
                                <NavLink to='/dashboard/manageclass'>
                                    <FaBookOpen
                                    ></FaBookOpen>Manage Classes
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to='/dashboard/manageuser'>
                                    <RxAvatar></RxAvatar> Manage User
                                </NavLink>
                            </li>

                        </> : isInstructor ? <>
                            <NavLink to='/dashboard/addclass'>
                                <FaBookOpen
                                ></FaBookOpen> Add Class
                            </NavLink>

                            <NavLink to='/dashboard/addclass'>
                                <FaBookOpen
                                ></FaBookOpen>My Classes
                            </NavLink>

                        </>
                            : <>
                                <li>
                                    <NavLink to='/dashboard/myselected'>
                                        <FaBookOpen
                                        ></FaBookOpen> My Seleted Class
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/enrollclass'>
                                        <BsFillBookmarkCheckFill />  My Enroll Class
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/paymenthistory'>
                                        <FaWallet></FaWallet> Payment History
                                    </NavLink>
                                </li>
                            </>

                    }


                    <div className="divider"></div>
                    <li>
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;