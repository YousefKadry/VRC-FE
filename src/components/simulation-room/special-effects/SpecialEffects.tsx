import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { twJoin } from 'tailwind-merge';

import CustomButton from '../../shared/Button';
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

            <CustomButton
                className={twJoin(
                    'from-RoomButtonGradient1 to-RoomButtonGradient2',
                    'w-full px-4 py-3 mt-0 text-base rounded-lg'
                )}
                onClick={handleAddClouds}
            >
                Add Cloud
            </CustomButton>
        </div>
    );
};

export default SpecialEffects;
