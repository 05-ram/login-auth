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
    const { isAuthenticated, userRole } = useContext(AuthContext);

    const routes = [
        {
            path: '/',
            element: isAuthenticated ? <Layout /> : <Login />,
            children: [
                {
                    path: '/dashboard',
                    element: isAuthenticated ? <Dashboard /> : <Login />
                },
                {
                    path: '/admin',
                    element: isAuthenticated && userRole === 'admin' ? <AdminPanel /> : <Login />
                },
                {
                    path: '/users',
                    element: isAuthenticated ? <Users /> : <Login />
                },
                {
                    path: '/user-info',
                    element: isAuthenticated ? <UserInfo /> : <Login />
                }
            ]
        },
        {
            path: '*',
            element: <Login />
        }
    ];

    return createBrowserRouter(routes);
}

export default RouterData;
