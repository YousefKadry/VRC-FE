import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/navbar/Navbar.tsx';

const MainLayout = () => {
    return (
        <div className="h-full flex flex-col">
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
