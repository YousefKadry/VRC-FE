import Sidebar from '../shared/Sidebar/Sidebar';
import useController from './transformation-controller/useController';
import { Leva } from 'leva';
import { useSelector } from 'react-redux';
import { IAppStore } from '../../models/app-store';
import { TAppDispatch } from '../../store/app-store';
import { useDispatch } from 'react-redux';
import { storeRoomsSliceActions } from '../../store/slices/rooms/rooms-slice';

const SimulationRoom = () => {
    const meshes = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.meshes);
    const selectedMesheID = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.selectedMeshId);
    const selectedMesh = meshes ? meshes[selectedMesheID!] : null;
    const dispatch = useDispatch<TAppDispatch>();

    const [transformations, mouseController] = useController({selectedMesh, transformationChangeHandler:(type, value)=>{
        dispatch(storeRoomsSliceActions.updateSelectedMesh({[type]:value}))      
    }});

    


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
            <Leva fill hidden={!selectedMesh} />
        </div>
        <Sidebar />
    </>
    )
        
};

export default SimulationRoom;
