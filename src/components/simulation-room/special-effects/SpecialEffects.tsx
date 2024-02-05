import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { twJoin } from 'tailwind-merge';

import CustomButton from '../../shared/Button';
import Switch from '../../ui/switch/Switch';

import { IAppStore } from '../../../models/app-store';
import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice';
import { TRoomEffects } from '../../../models/room';

const SpecialEffects: React.FC = () => {
    const dispatch = useDispatch();
    const starsVisibility = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.stars ?? false);
    const skyVisibility = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.sky ?? true);
    const basePlaneVisibility = useSelector(
        (store: IAppStore) => store.rooms.selectedRoom?.state.basePlane ?? true
    );

    const handleEffectsChanging = (checked: boolean, id: TRoomEffects) => {
        dispatch(storeRoomsSliceActions.updateSelectedRoomState({ [id]: checked }));
    };

    const handleAddClouds = () => {
        dispatch(storeRoomsSliceActions.addObjects({ clouds: [{ color: '#ffffff' }] }));
    };

    const effects: Array<{ id: TRoomEffects; title: string; checked: boolean }> = [
        { id: 'stars', title: 'Stars', checked: starsVisibility },
        { id: 'sky', title: 'Sky', checked: skyVisibility },
        { id: 'basePlane', title: 'Base Plane', checked: basePlaneVisibility },
    ];

    return (
        <div className="w-full flex flex-col gap-8 overflow-auto">
            <div className="flex flex-col gap-y-3">
                {effects.map((effect) => {
                    return (
                        <Switch
                            key={effect.id}
                            id={effect.id}
                            checked={effect.checked}
                            title={effect.title}
                            onSwitchBg="rgb(var(--simulation-room-sidebar-bg))"
                            onSwitchHandleBg="rgb(var(--simulation-room-sidebar-color))"
                            onSwitchColor="rgb(var(--simulation-room-sidebar-color))"
                            offSwitchBg="rgb(var(--simulation-room-sidebar-menu-color))"
                            offSwitchHandleBg="rgb(var(--simulation-room-sidebar-menu-bg))"
                            offSwitchColor="rgb(var(--simulation-room-sidebar-menu-bg))"
                            toggleHandler={(checked) => handleEffectsChanging(checked, effect.id)}
                        />
                    );
                })}
            </div>

            <div className="flex flex-col gap-y-3">
                <CustomButton
                    className={twJoin(
                        'text-simulation-room-gradient-color from-simulation-room-gradient-from to-simulation-room-gradient-to',
                        'w-full px-4 py-3 mt-0 text-base rounded-lg'
                    )}
                    onClick={handleAddClouds}
                >
                    Add Cloud
                </CustomButton>
            </div>
        </div>
    );
};

export default SpecialEffects;
