import { Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import MainLayout from "./layouts/MainLayout.tsx";
import Rooms from "./components/rooms/Rooms.tsx";

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path={"/"} element={<MainLayout/>}>
                <Route path={"rooms"} element={<Rooms/>} />
            </Route>
        </Routes>
    );
}

export default App;
