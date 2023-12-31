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
import AddClass from "../pages/DashBoard/Student/Instructor/AddClass";
import ManageClass from "../pages/DashBoard/Student/Admin/ManageClass";
import MyClass from "../pages/DashBoard/Student/Instructor/MyClass";
import UpdateClass from "../pages/DashBoard/Student/Instructor/UpdateClass";
import AllClasses from "../pages/Home/Home/AllClasses/AllClasses";
import AllInstructor from "../pages/Home/Home/AllInstructor/AllInstructor";
import EnrollClass from "../pages/DashBoard/Student/EnrollClass";
import PaymentHistory from "../pages/DashBoard/Student/PaymentHistory";

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
            {
                path: 'classes',
                element: <AllClasses></AllClasses>
            },
            {
                path: 'instructor',
                element: <AllInstructor></AllInstructor>
            }

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
            //admin
            {
                path: 'manageuser',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'manageclass',
                element: <ManageClass></ManageClass>
            },
            //instrutor
            {
                path: 'addclass',
                element: <AddClass></AddClass>
            },
            {
                path: 'myclass',
                element: <MyClass></MyClass>
            },
            {
                path: 'update',
                element: <UpdateClass></UpdateClass>
            },
            //user
            {
                path: 'myselected',
                element: <MySelectedClasses></MySelectedClasses>
            },
            {
                path: 'enrollclass',
                element: <EnrollClass></EnrollClass>
            },
            {
                path: 'paymenthistory',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    }
]);
export default router;