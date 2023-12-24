import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';

const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));

//todo add React.Suspense

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    );
}

export default App;
