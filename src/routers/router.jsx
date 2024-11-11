import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login.jsx";
import Register from "../components/Register";
import CartPage from "../pages/books/CartPage";
import SingleBook from "../pages/books/SingleBook";
import CheckoutPage from "../pages/books/CheckoutPage";
import OrderPage from "../pages/books/OrderPage";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute"
import AdminLogin from "../components/AdminLogin";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import ManageBooks from "../pages/dashboard/manageBooks/ManageBooks";
import { Provider } from 'react-redux';
import { store } from '../redux/features/store.js';
import AddBook from "../pages/dashboard/addBook/AddBook.jsx";
import UpdateBook from "../pages/dashboard/editbook/UpdateBook.jsx";
import UserDashboard from "../pages/dashboard/users/UserDashboard.jsx";

const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "/login",
                element : <Login/>
            },
            {
                path : "/register",
                element : <Register/>
            },
            {
                path:"/user-dashboard",
                element: <UserDashboard/>
            },
            {
                path:"/orders",
                element:<PrivateRoute><OrderPage/></PrivateRoute>
            },
            {
                path : "/cart",
                element: <CartPage/>
            },
            {
                path : "/checkout",
                element: <PrivateRoute><CheckoutPage/></PrivateRoute>
            },
            {
                path : "/books/:id",
                element:<SingleBook/>
            }
        ]
    },
    {
        path:"/admin",
        element:<AdminLogin/>
    },
    {
        path:"/dashboard",
        element:<AdminRoute><DashboardLayout/></AdminRoute>,
        children:[
            {
                path:"",
                element:<AdminRoute><Dashboard/></AdminRoute>
            },
            {
                path:"add-new-book",
                element:<AdminRoute>
                    <Provider store={store}>
                        <AddBook/>
                    </Provider>
                </AdminRoute>
            },
            {
                path:"edit-book/:id",
                element:<AdminRoute>
                    <Provider store={store}>
                        <UpdateBook/>
                    </Provider>
                </AdminRoute>
            },
            {
                path:"manage-books/",
                element:<AdminRoute>
                    <Provider store={store}>
                        <ManageBooks/>
                    </Provider>
                </AdminRoute>
            },
        ]
    }
]);
export default router;