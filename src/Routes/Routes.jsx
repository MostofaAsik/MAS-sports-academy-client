import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/LoginPage/Login";
import SignUp from "../pages/Register/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
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
]);
export default router;