import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Switch from '../../ui/switch/Switch';

import { IAppStore } from '../../../models/app-store';
import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice';

const SpecialEffects: React.FC = () => {
    const dispatch = useDispatch();
    const starsVisibility = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.stars ?? false);
    const skyVisibility = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.sky ?? true);
    const basePlaneVisibility = useSelector(
        (store: IAppStore) => store.rooms.selectedRoom?.state.basePlane ?? true
    );

    const handleEffectsChanging = (checked: boolean, id: 'stars' | 'sky' | 'basePlane') => {
        dispatch(storeRoomsSliceActions.updateSelectedRoomState({ [id]: checked }));
    };

    const handleAddClouds = () => {
        dispatch(storeRoomsSliceActions.addObjects({ clouds: [{ color: '#ffffff' }] }));
    };

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-y-4 flex-wrap overflow-auto">
                <Switch
                    id="stars"
                    checked={starsVisibility}
                    title="Stars"
                    toggleHandler={(checked) => handleEffectsChanging(checked, 'stars')}
                />

                <Switch
                    id="sky"
                    checked={skyVisibility}
                    title="Sky"
                    toggleHandler={(checked) => handleEffectsChanging(checked, 'sky')}
                />

                <Switch
                    id="basePlane"
                    checked={basePlaneVisibility}
                    title="Base Plane"
                    toggleHandler={(checked) => handleEffectsChanging(checked, 'basePlane')}
                />
            </div>

            <button
                className="w-full bg-[#9167C2] text-white p-2 rounded-lg hover:bg-[#7d5aa6]"
                id="add-Clouds"
                onClick={handleAddClouds}
            >
                Add Cloud
            </button>
        </div>
    );
};

export default SpecialEffects;
