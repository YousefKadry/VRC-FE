import Sidebar from '../shared/Sidebar/Sidebar';
import Controller from './transformation-controller/controller';
import { Leva } from 'leva';scroll

const SimulationRoom = () => {
    const [transformations, mouseController] = Controller();
    return (
        <>
            <div 
                style={{
                width: 320,
                position: "absolute",
                right: 0,
                top: 0,
                zIndex: 100,
                opacity: 0.8
                }}
            >
                <Leva fill />
            </div>
            <Sidebar />
        </>
    );
};

export default SimulationRoom;
