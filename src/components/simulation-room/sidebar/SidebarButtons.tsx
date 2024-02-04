import React from 'react';
import { twJoin } from 'tailwind-merge';
import {
    faCamera,
    faCircleNodes,
    faDownload,
    faFont,
    faHome,
    faImage,
    faShareFromSquare,
    faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ESimulationRoomButtonId } from '../../../models/simulation-room-sidebar';

const simulationRoomSidebarButtons = [
    { id: ESimulationRoomButtonId.BACK_HOME_BTN, icon: faHome, title: 'Back Home' },
    { id: ESimulationRoomButtonId.CAMERA_BTN, icon: faCamera, title: 'Camera Control' },
    { id: ESimulationRoomButtonId.TEXT_BTN, icon: faFont, title: 'Add Text' },
    { id: ESimulationRoomButtonId.HDRIs_ASSETS_BTN, icon: faImage, title: 'Room Background' },
    { id: ESimulationRoomButtonId.GLTFs_ASSETS_BTN, icon: faDownload, title: 'Models' },
    { id: ESimulationRoomButtonId.SPECIAL_EFFECT_BTN, icon: faStarHalfStroke, title: 'Special Effects' },
    { id: ESimulationRoomButtonId.MESHES_BTN, icon: faCircleNodes, title: 'Meshes' },
    { id: ESimulationRoomButtonId.SHARING_BTN, icon: faShareFromSquare, title: 'Share' },
];

export interface ISimulationRoomSidebarButtonsProps {
    buttonClickHandler: (buttonId: ESimulationRoomButtonId | null) => void;
    activeButtonId: ESimulationRoomButtonId | null;
}

const SidebarButtons: React.FC<ISimulationRoomSidebarButtonsProps> = (props) => {
    const { activeButtonId, buttonClickHandler } = props;

    return (
        <ul className="w-full flex flex-col items-center">
            {simulationRoomSidebarButtons.map((btn) => {
                return (
                    <button
                        key={btn.id}
                        className={twJoin(
                            'py-4 w-full outline-none',
                            btn.id === ESimulationRoomButtonId.BACK_HOME_BTN || btn.id === activeButtonId
                                ? 'bg-[#311B52]'
                                : '',
                            btn.id === ESimulationRoomButtonId.BACK_HOME_BTN
                                ? 'opacity-85 hover:opacity-100 border-b-2'
                                : ''
                        )}
                        title={btn.title}
                        onClick={buttonClickHandler.bind(null, btn.id)}
                    >
                        <FontAwesomeIcon className="text-white text-2xl" icon={btn.icon} />
                    </button>
                );
            })}
        </ul>
    );
};

export default SidebarButtons;
