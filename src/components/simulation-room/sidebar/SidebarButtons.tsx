import React from 'react';
import { twJoin } from 'tailwind-merge';
import {
    faArrowLeft,
    faCamera,
    faCircleNodes,
    faDownload,
    faFont,
    faHome,
    faShareFromSquare,
    faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ESimulationRoomButtonId } from '../../../models/simulation-room-sidebar';

const simulationRoomSidebarButtons = [
    { id: ESimulationRoomButtonId.BACK_HOME_BTN, icon: faHome },
    { id: ESimulationRoomButtonId.CAMERA_BTN, icon: faCamera },
    { id: ESimulationRoomButtonId.TEXT_BTN, icon: faFont },
    { id: ESimulationRoomButtonId.POLY_ITEMS_BTN, icon: faDownload },
    { id: ESimulationRoomButtonId.SPECIAL_EFFECT_BTN, icon: faStarHalfStroke },
    { id: ESimulationRoomButtonId.MESHES_BTN, icon: faCircleNodes },
    { id: ESimulationRoomButtonId.SHARING_BTN, icon: faShareFromSquare },
    { id: ESimulationRoomButtonId.MENU_CLOSING_BTN, icon: faArrowLeft },
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
                if (btn.id === ESimulationRoomButtonId.MENU_CLOSING_BTN && !activeButtonId) {
                    return null;
                }

                return (
                    <button
                        key={btn.id}
                        onClick={buttonClickHandler.bind(null, btn.id)}
                        className={twJoin(
                            'py-6 w-full outline-none',
                            btn.id === ESimulationRoomButtonId.BACK_HOME_BTN || btn.id === activeButtonId
                                ? 'bg-[#311B52]'
                                : '',
                            btn.id === ESimulationRoomButtonId.BACK_HOME_BTN
                                ? 'opacity-85 hover:opacity-100 border-b-2'
                                : ''
                        )}
                    >
                        <FontAwesomeIcon className="text-white text-4xl" icon={btn.icon} />
                    </button>
                );
            })}
        </ul>
    );
};

export default SidebarButtons;
