// RouterData.js
import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import AdminPanel from '../pages/AdminPanel';
import Users from '../pages/Users';
import UserInfo from '../pages/UserInfo';
import Dashboard from '../pages/Dashboard';
import Layout from '../components/Layout';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';


const RouterData = () => {
    const { isAuthenticated } = useContext(AuthContext);

    const routes = [
        {
            path: '/',
            element: isAuthenticated ? <Layout /> : <Login />,
            children: [
                {
                    path: '/admin',
                    element: isAuthenticated ? <AdminPanel /> : <Login />
                },
                {
                    path: '/users',
                    element: isAuthenticated ? <Users /> : <Login />
                },
                {
                    path: '/user-info',
                    element: isAuthenticated ? <UserInfo /> : <Login />
                },
                {
                    path: '/dashboard',
                    element: isAuthenticated ? <Dashboard /> : <Login />
                }
            ]
        }
    ];

    return createBrowserRouter(routes);
}

export default RouterData;
