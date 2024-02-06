import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { twJoin } from 'tailwind-merge';

import Switch from '../../ui/switch/Switch';
import CustomButton from '../../shared/Button';

import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice';
import { IAppStore } from '../../../models/app-store';
import { TRoomEffects } from '../../../models/room';

const LightEditor: React.FC = () => {
    const dispatch = useDispatch();

    const ambientLightVisibility = useSelector(
        (store: IAppStore) => store.rooms.selectedRoom?.state.ambientLight ?? true
    );

    const hideLightIcons = useSelector(
        (store: IAppStore) => store.rooms.selectedRoom?.state.hideLightIcons ?? false
    );

    const CastShadowsEnable = useSelector(
        (store: IAppStore) => store.rooms.selectedRoom?.state.castShadows ?? true
    );

    const handleEffectsChanging = (checked: boolean, id: TRoomEffects) => {
        dispatch(storeRoomsSliceActions.updateSelectedRoomState({ [id]: checked }));
    };

    const handleAddLight = (type: 'spot' | 'point') => {
        dispatch(
            storeRoomsSliceActions.addObjects({
                lights: [
                    {
                        type,
                        color: '#ffffff',
                        intensity: 1000,
                    },
                ],
            })
        );
    };

    const effects: Array<{ id: TRoomEffects; title: string; checked: boolean }> = [
        { id: 'ambientLight', title: 'Ambient Light', checked: ambientLightVisibility },
        { id: 'castShadows', title: 'Cast Shadows', checked: CastShadowsEnable },
        { id: 'hideLightIcons', title: 'Hide Light Icons', checked: hideLightIcons },
    ];

    return (
        <div className="w-full flex flex-col gap-6">
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
                        'px-4 py-2.5 mt-0 text-base rounded-lg'
                    )}
                    onClick={handleAddLight.bind(null, 'spot')}
                >
                    Add Spot Light
                </CustomButton>

                <CustomButton
                    className={twJoin(
                        'text-simulation-room-gradient-color from-simulation-room-gradient-from to-simulation-room-gradient-to',
                        'px-4 py-2.5 mt-0 text-base rounded-lg'
                    )}
                    onClick={handleAddLight.bind(null, 'point')}
                >
                    Add Point Light
                </CustomButton>
            </div>
        </div>
    );
};

export default LightEditor;
