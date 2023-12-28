import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import MainLayout from "./layouts/MainLayout.tsx";
import Rooms from "./components/rooms/Rooms.tsx";
import ForgotPassword from "./components/auth/ForgotPassword";
import RestPassword from "./components/auth/ResetPassword";

const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));

//todo add React.Suspense

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<RestPassword />} />
            <Route path={"/"} element={<MainLayout/>}>
                <Route path={"rooms"} element={<Rooms/>} />
            </Route>
        </Routes>
    );
}

export default App;
