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

const simulationRoomSidebarButtons = [
    { id: 'back-home-btn', icon: faHome },
    { id: 'camera-btn', icon: faCamera },
    { id: 'text-btn', icon: faFont },
    { id: 'poly-items-btn', icon: faDownload },
    { id: 'special-effect-btn', icon: faStarHalfStroke },
    { id: 'meshes-btn', icon: faCircleNodes },
    { id: 'sharing-btn', icon: faShareFromSquare },
    { id: 'menu-closing-btn', icon: faArrowLeft },
];

export interface ISimulationRoomSidebarButtonsProps {
    buttonClickHandler: (buttonId: string | null) => void;
    activeButtonId: string | null;
}

const SidebarButtons: React.FC<ISimulationRoomSidebarButtonsProps> = (props) => {
    const { activeButtonId, buttonClickHandler } = props;

    return (
        <ul className="w-full flex flex-col items-center">
            {simulationRoomSidebarButtons.map((btn) => {
                if (btn.id === 'menu-closing-btn' && !activeButtonId) {
                    return null;
                }

                return (
                    <button
                        key={btn.id}
                        onClick={buttonClickHandler.bind(null, btn.id)}
                        className={twJoin(
                            'py-6 w-full outline-none',
                            btn.id === 'back-home-btn' || btn.id === activeButtonId ? 'bg-[#311B52]' : '',
                            btn.id === 'back-home-btn' ? 'opacity-85 hover:opacity-100 border-b-2' : ''
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
