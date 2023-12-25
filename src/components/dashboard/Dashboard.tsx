import { useState } from 'react';

import DashboardSlider from './dashboard-slider/DashboardSlider';
import DashboardText from './dashboard-text/DashboardText';

const Dashboard = () => {
    const [activeSlider, setActiveSlider] = useState(0);

    return (
        <div>
            <DashboardSlider activeSliderHandler={(activeSlider) => setActiveSlider(activeSlider)} />
            <DashboardText activeSlider={activeSlider} />
        </div>
    );
};

export default Dashboard;
