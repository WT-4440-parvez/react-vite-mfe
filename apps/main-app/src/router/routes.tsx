import Layout from '../components/Layout/Layout';
import Dashboard from '../pages/Dashboard';
import Analytics from '../pages/AnalyticsHub';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: 'analytics',
                element: <Analytics />,
            },
        ],
    },
]