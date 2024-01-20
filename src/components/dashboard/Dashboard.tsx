import { useState } from 'react';

import DashboardSlider from './dashboard-slider/DashboardSlider';
import DashboardText from './dashboard-text/DashboardText';
import CreateRoomPopup from "../shared/Modal/CreateRoomPopup.tsx";
import EnterRoomPopup from "../shared/Modal/EnterRoomPopup.tsx";

const Dashboard = () => {
    const [activeSlider, setActiveSlider] = useState(0);

    return (
        <div className="grow w-full flex">
            <div className="w-full self-center">
                <DashboardSlider activeSliderHandler={(activeSlider) => setActiveSlider(activeSlider)} />
                <DashboardText activeSlider={activeSlider} />
                <CreateRoomPopup />
                <EnterRoomPopup />
            </div>
        </div>
    );
};

export default Dashboard;
