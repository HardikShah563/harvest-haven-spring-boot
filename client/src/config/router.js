import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import AdminDashboard from "../pages/AdminDashboard";
import EditCat from "../pages/EditCat";
import DelCat from "../pages/DelCat";
import EditProd from "../pages/EditProd";
import DelProd from "../pages/DelProd";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            }, {
                path: "/shop",
                element: <Shop />,
            }, {
                path: "/cart",
                element: <Cart />,
            }, {
                path: "/checkout",
                element: <Checkout />,
            }, {
                path: "/admin-dashboard",
                element: <AdminDashboard />,
            }, {
                path: "/edit-cat",
                element: <EditCat />,
            }, {
                path: "/del-cat",
                element: <DelCat />,
            }, {
                path: "/edit-prod",
                element: <EditProd />,
            }, {
                path: "/del-prod",
                element: <DelProd />,
            }
        ],
    }, {
        path: "/signin",
        element: <SignIn />,
    }, {
        path: "/signup",
        element: <SignUp />,
    }
]);

export default router;