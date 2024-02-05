import React from 'react';
import Switch from '../../ui/switch/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice';
import { IAppStore } from '../../../models/app-store';

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

    const handleEffectsChanging = (
        checked: boolean,
        id: 'ambientLight' | 'hideLightIcons' | 'castShadows'
    ) => {
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
    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-y-4 flex-wrap overflow-auto">
                <Switch
                    id="ambientLight"
                    checked={ambientLightVisibility}
                    title="Ambient Light"
                    toggleHandler={(checked) => handleEffectsChanging(checked, 'ambientLight')}
                />
                <Switch
                    id="castShadows"
                    checked={CastShadowsEnable}
                    title="Cast Shadows"
                    toggleHandler={(checked) => handleEffectsChanging(checked, 'castShadows')}
                />
                <Switch
                    id="hideLightIcons"
                    checked={hideLightIcons}
                    title="Hide Light Icons"
                    toggleHandler={(checked) => handleEffectsChanging(checked, 'hideLightIcons')}
                />
            </div>
            <button
                className="w-full bg-[#9167C2] text-white p-2 rounded-lg hover:bg-[#7d5aa6]"
                id="add-Spot-Light"
                onClick={() => {
                    handleAddLight('spot');
                }}
            >
                Add Spot Light
            </button>

            <button
                className="w-full bg-[#9167C2] text-white p-2 rounded-lg hover:bg-[#7d5aa6]"
                id="add-Point-Light"
                onClick={() => {
                    handleAddLight('point');
                }}
            >
                Add Point Light
            </button>
        </div>
    );
};

export default LightEditor;
