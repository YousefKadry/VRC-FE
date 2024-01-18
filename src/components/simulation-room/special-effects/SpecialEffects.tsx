import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { IStoreRoomsSlice } from '../../../models/app-store';
import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice';
import Switch from '../../ui/switch/Switch';

const SpecialEffects: React.FC = () => {
    const dispatch = useDispatch();
    const starsVisibility = useSelector(
        (state: IStoreRoomsSlice) => state.selectedRoom?.state.stars || false
    );
    const cloudsVisibility = useSelector(
        (state: IStoreRoomsSlice) => state.selectedRoom?.state.clouds || false
    );
    const handleEffectsChanging = (checked: boolean, id: 'stars' | 'clouds') => {
        dispatch(storeRoomsSliceActions.updateSelectedRoomState({ [id]: checked }));
    };

    return (
        <div>
            <div className="flex gap-x-12 gap-y-4 flex-wrap">
                <Switch
                    id="stars"
                    checked={starsVisibility}
                    title="Stars"
                    toggleHandler={(checked) => handleEffectsChanging(checked, 'stars')}
                />

                {/* <Switch
                    id="clouds"
                    checked={cloudsVisibility}
                    title="Clouds"
                    toggleHandler={(checked) => handleEffectsChanging(checked, 'clouds')}
                /> */}
            </div>
        </div>
    );
};

export default SpecialEffects;
