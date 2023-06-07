import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Home/Home/Shared/Navbar/Navbar';
import Footer from '../pages/Home/Home/Shared/Footer/Footer';


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[calc(100vh-200px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;