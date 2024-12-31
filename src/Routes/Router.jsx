import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layouts/Root/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Destination from "../Pages/Destination/Destination";
import Dashboard from "../Pages/Dashboard/Dashboard";


const Router = createBrowserRouter ([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/Login',
                element: <Login></Login>
            },
            {
                path: '/Register',
                element: <Register></Register>
            },
            {
                path: '/destination',
                element: <Destination></Destination>
            },
            {
                path:'/dashboard',
                element: <Dashboard></Dashboard>,
                loader: () => fetch('/hotels.json')
            }
    ]
    }
])

export default Router