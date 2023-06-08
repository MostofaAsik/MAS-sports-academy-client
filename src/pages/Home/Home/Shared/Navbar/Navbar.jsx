import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProvider';
import logo from '../../../../../assets/images/sports.jpg'

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div className="navbar  bg-gradient-to-r from-pink-500 to-purple-500 h-28">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">
                    <img className='w-20 h-14' src={logo} alt="" />
                </a>
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

                        {
                            user ? <>
                                <li>
                                    <Link to='/dashboard/myselected'>DashBoard</Link>
                                </li>
                                <li><button onClick={handleLogOut}>LogOut</button></li>
                            </> :
                                <li>
                                    <Link to='/login'>Login</Link>
                                </li>
                        }
                    </ul>
                </div>

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img title={user?.displayName} src={user?.photoURL} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

                        {
                            user ? <>
                                <li>Dashboard </li>
                                <li><button onClick={handleLogOut}>LogOut</button></li>
                            </> :
                                <li>
                                    <Link to='/login'>Login</Link>
                                </li>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;