import React from 'react';
import { useSelector } from 'react-redux';
import { twJoin } from 'tailwind-merge';
import {
    faCircleNodes,
    faFont,
    faHome,
    faShareFromSquare,
    faStarHalfStroke,
    faLightbulb,
    faCubes,
    faPeopleCarryBox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tb360View } from 'react-icons/tb';

import { ESimulationRoomButtonId } from '../../../models/simulation-room-sidebar';
import { IAppStore } from '../../../models/app-store';

export interface ISimulationRoomSidebarButtonsProps {
    buttonClickHandler: (buttonId: ESimulationRoomButtonId | null) => void;
    activeButtonId: ESimulationRoomButtonId | null;
}

export const getSidebarButtons = (ownerId?: number, userId?: number) => {
    return [
        {
            id: ESimulationRoomButtonId.BACK_HOME_BTN,
            Icon: <FontAwesomeIcon className="text-2xl" icon={faHome} />,
            title: 'Back Home',
        },
        {
            id: ESimulationRoomButtonId.GLTFs_ASSETS_BTN,
            Icon: <FontAwesomeIcon className="text-2xl" icon={faCircleNodes} />,
            title: 'Models',
        },
        {
            id: ESimulationRoomButtonId.HDRIs_ASSETS_BTN,
            Icon: <Tb360View className="text-3xl" />,
            title: 'Room Background',
        },
        {
            id: ESimulationRoomButtonId.MESHES_BTN,
            Icon: <FontAwesomeIcon className="text-2xl" icon={faCubes} />,
            title: 'Meshes',
        },
        {
            id: ESimulationRoomButtonId.TEXT_BTN,
            Icon: <FontAwesomeIcon className="text-2xl" icon={faFont} />,
            title: 'Add Text',
        },
        {
            id: ESimulationRoomButtonId.LIGHT_BTN,
            Icon: <FontAwesomeIcon className="text-2xl" icon={faLightbulb} />,
            title: 'Lights',
        },
        {
            id: ESimulationRoomButtonId.SPECIAL_EFFECT_BTN,
            Icon: <FontAwesomeIcon className="text-2xl" icon={faStarHalfStroke} />,
            title: 'Special Effects',
        },
        {
            id: ESimulationRoomButtonId.COLLABORATORS,
            Icon: <FontAwesomeIcon className="text-2xl" icon={faPeopleCarryBox} />,
            title: 'Collaborators',
            hidden: ownerId !== userId,
        },
        {
            id: ESimulationRoomButtonId.SHARING_BTN,
            Icon: <FontAwesomeIcon className="text-2xl" icon={faShareFromSquare} />,
            title: 'Share',
            hidden: ownerId !== userId,
        },
    ];
};

const SidebarButtons: React.FC<ISimulationRoomSidebarButtonsProps> = (props) => {
    const { activeButtonId, buttonClickHandler } = props;

    const userId = useSelector((store: IAppStore) => store.auth.userInfo?.id);
    const ownerId = useSelector((store: IAppStore) => store.rooms.selectedRoom?.ownerId);

    const simulationRoomSidebarButtons = getSidebarButtons(ownerId, userId);

    return (
        <ul className="w-full flex flex-col items-center">
            {simulationRoomSidebarButtons.map((btn) => {
                if (btn.hidden === true) {
                    return null;
                }

                return (
                    <button
                        key={btn.id}
                        className={twJoin(
                            'flex justify-center',
                            'text-simulation-room-sidebar-color',
                            'py-4 w-full outline-none',
                            btn.id === ESimulationRoomButtonId.BACK_HOME_BTN || btn.id === activeButtonId
                                ? 'bg-simulation-room-sidebar-menu-bg'
                                : '',
                            btn.id === ESimulationRoomButtonId.BACK_HOME_BTN
                                ? 'opacity-85 hover:opacity-100 border-b-2 border-simulation-room-sidebar-color'
                                : ''
                        )}
                        title={btn.title}
                        onClick={buttonClickHandler.bind(null, btn.id)}
                    >
                        {btn.Icon}
                    </button>
                );
            })}
        </ul>
    );
};

export default SidebarButtons;
