import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import AdminPanel from '../pages/AdminPanel';
import Users from '../pages/Users';
import UserInfo from '../pages/UserInfo';
import Dashboard from '../pages/Dashboard';
import Layout from '../components/Layout';

const RouterData = () => {
    const strictRoute = createBrowserRouter(
        [
            {
                path: '/',
                element: <Layout />,
                children: [
                    {
                        path: '',
                        element: <Login />
                    },
                    {
                        path: '/admin',
                        element: <AdminPanel />
                    },
                    {
                        path: '/users',
                        element: <Users />
                    },
                    {
                        path: '/user-info',
                        element: <UserInfo />
                    },
                    {
                        path: '/dashboard',
                        element: <Dashboard />
                    }
                ]
            }

        ]
    )
    return strictRoute;
}

export default RouterData;