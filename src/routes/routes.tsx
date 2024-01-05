import React from 'react';
import { Navigate } from 'react-router-dom';

import { IRoutes } from '../models/app-routes';

const Login = React.lazy(() => import('../components/auth/Login'));
const SignUp = React.lazy(() => import('../components/auth/SignUp'));
const ForgotPassword = React.lazy(() => import('../components/auth/ForgotPassword'));
const RestPassword = React.lazy(() => import('../components/auth/ResetPassword'));

const MainLayout = React.lazy(() => import('../layouts/MainLayout'));
const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard'));
const Rooms = React.lazy(() => import('../components/rooms/Rooms'));
const SimulationRoom = React.lazy(() => import('../components/simulation-room/SimulationRoom.tsx'));

const appRoutes: IRoutes = {
    '/login': {
        Element: <Login />,
        redirectTo: { to: '/dashboard', when: 'AUTH' },
    },
    '/sign-up': {
        Element: <SignUp />,
        redirectTo: { to: '/dashboard', when: 'AUTH' },
    },
    '/forgot-password': {
        Element: <ForgotPassword />,
        redirectTo: { to: '/dashboard', when: 'AUTH' },
    },
    '/reset-password': {
        Element: <RestPassword />,
        redirectTo: { to: '/dashboard', when: 'AUTH' },
    },
    '/': {
        Element: <MainLayout />,
        children: {
            '': {
                index: true,
                Element: <Navigate to="dashboard" relative="route" />,
            },
            dashboard: {
                Element: <Dashboard />,
            },
            rooms: {
                Element: <Rooms />,
            },
        },
        redirectTo: { to: '/login?redirectTo=^path$', when: 'NOT_AUTH' },
    },
    '/simulation-room': {
        Element: <SimulationRoom />,
        redirectTo: { to: '/login?redirectTo=^path$', when: 'NOT_AUTH' },
    },
    '*': {
        //todo: implement 404 page
        Element: <h1>Not Found: 404</h1>,
    },
};

export default appRoutes;
