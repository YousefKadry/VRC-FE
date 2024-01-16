import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ProtectedRoutes from './ProtectedRoutes.tsx';

import { IAppStore } from '../models/app-store';

const Login = React.lazy(() => import('../components/auth/Login'));
const SignUp = React.lazy(() => import('../components/auth/SignUp'));
const ForgotPassword = React.lazy(() => import('../components/auth/ForgotPassword'));
const RestPassword = React.lazy(() => import('../components/auth/ResetPassword'));

const MainLayout = React.lazy(() => import('../layouts/MainLayout'));
const Dashboard = React.lazy(() => import('../components/dashboard/Dashboard'));
const Rooms = React.lazy(() => import('../components/rooms/Rooms'));
const SimulationRoom = React.lazy(() => import('../components/simulation-room/SimulationRoom.tsx'));

const AppRoutes = () => {
    const hasAutoLoginFinished = !!useSelector((store: IAppStore) => store.auth.hasAutoLoginFinished);

    if (!hasAutoLoginFinished) {
        return null;
    }

    return (
        <Routes>
            <Route element={<ProtectedRoutes redirectWhen="AUTH" redirectTo="/dashboard" />}>
                <Route path="/login" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/reset-password/:token" element={<RestPassword />} />
            </Route>

            <Route element={<ProtectedRoutes redirectWhen="NOT_AUTH" redirectTo="/login" />}>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Navigate to="/dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="rooms" element={<Rooms />} />
                </Route>
                <Route path="/simulation-room" element={<SimulationRoom />} />
            </Route>

            <Route path="*" element={<h1>Not Found: 404</h1>} />
        </Routes>
    );
};

export default React.memo(AppRoutes);
