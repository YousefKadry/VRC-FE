import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { twJoin } from 'tailwind-merge';

import SidebarButtons from './SidebarButtons.tsx';
import ShareRoom from '../share-room/shareRoom.tsx';
import CameraManager from '../camera-management/CameraManager.tsx';
import AddMesh from '../object-editor/AddMesh.tsx';
import PolyItems from '../poly-items/PolyItems.tsx';
import SpecialEffects from '../special-effects/SpecialEffects.tsx';
import TextManager from '../text-management/TextManager.tsx';

const Sidebar = () => {
    const [activeButtonId, setActiveButtonId] = useState<string | null>(null);
    const navigate = useNavigate();

    const renderFocus = () => {
        switch (activeButtonId) {
            case 'camera-btn':
                return <CameraManager />;
            case 'text-btn':
                return <TextManager />;
            case 'poly-items-btn':
                return <PolyItems />;
            case 'meshes-btn':
                return <AddMesh />;
            case 'sharing-btn':
                return <ShareRoom />;
            case 'special-effect-btn':
                return <SpecialEffects />;
            default:
                return null;
        }
    };

    const handleButtonClicking = (id: string | null) => {
        if (id === 'back-home-btn') {
            navigate('/dashboard');
        } else if (id === 'menu-closing-btn') {
            setActiveButtonId(null);
        } else {
            setActiveButtonId(id);
        }
    };

    return (
        <div
            className={`relative z-10 shrink-0 w-24 h-screen overflow-hidden transition-all duration-200 p-0`}
        >
            <div className="h-full w-full overflow-x-hidden overflow-y-auto bg-[#1E083C]">
                <SidebarButtons activeButtonId={activeButtonId} buttonClickHandler={handleButtonClicking} />
            </div>

            <div
                className={twJoin(
                    'fixed top-0 bottom-0 left-24 right-0 z-10',
                    'flex flex-col px-5 py-10 items-center transition-all duration-200 bg-[#311B52]',
                    !activeButtonId ? 'w-0 opacity-0' : 'max-w-[450px] opacity-100'
                )}
            >
                {renderFocus()}
            </div>
        </div>
    );
};

export default Sidebar;
