import {Outlet} from "react-router-dom";
import Navbar from "../components/shared/Navbar.tsx";

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default MainLayout;
