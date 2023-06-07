import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Navbar = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div className="navbar  bg-gradient-to-r from-pink-500 to-purple-500 h-28">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <h1 className='text-3xl font bold'>MAS Sport Academy</h1>
            </div>
            <div className="flex-none">

                <div className="navbar-center  lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl gap-3 flex items-center">
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>Instructors</li>
                        <li>Classes</li>
                        <li>Dashboard </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li><button>LogOut</button></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;