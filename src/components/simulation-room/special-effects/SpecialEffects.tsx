import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IAppStore } from '../../../models/app-store';
import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice';
import Switch from '../../ui/switch/Switch';

const SpecialEffects: React.FC = () => {
    const dispatch = useDispatch();
    const starsVisibility = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.stars || false);

    const handleEffectsChanging = (checked: boolean, id: 'stars') => {
        dispatch(storeRoomsSliceActions.updateSelectedRoomState({ [id]: checked }));
    };

    const handleAddClouds = () => {
        dispatch(storeRoomsSliceActions.addObjects({ clouds: [{ color: 'white' }] }));
    };

    return (
        <div className={`flex gap-x-12 gap-y-4 flex-wrap overflow-auto`}>
            <Switch
                id="stars"
                checked={starsVisibility}
                title="Stars"
                toggleHandler={(checked) => handleEffectsChanging(checked, 'stars')}
            />

            <button
                className="ml-10 bg-[#9167C2] text-white py-1 px-3 rounded-lg hover:bg-[#7d5aa6]"
                id="add-Clouds"
                onClick={handleAddClouds}
            >
                Add Cloud
            </button>
        </div>
    );
};

export default SpecialEffects;
