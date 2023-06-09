import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/LoginPage/Login";
import SignUp from "../pages/Register/SignUp";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashBoard from "../Layout/DashBoard";
import MySelectedClasses from "../pages/DashBoard/Student/MySelectedClasses";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/DashBoard/Student/Admin/AllUsers";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

        ]
    },
    {
        path: 'login',
        element: <Login></Login>
    },
    {
        path: 'signup',
        element: <SignUp></SignUp>
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: 'manageuser',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'myselected',
                element: <MySelectedClasses></MySelectedClasses>
            }
        ]
    }
]);
export default router;