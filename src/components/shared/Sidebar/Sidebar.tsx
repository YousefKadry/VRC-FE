import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faDownload, faShareFromSquare, faFont, faCircleNodes, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import BackgroundManager from "../../simulation-room/bg-management/BackgroundManager";
import PolyItems from "../../simulation-room/poly-items/PolyItems.tsx";

const Sidebar = () => {

    const [focused, setFocused] = useState("");
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleFocus = (id:string) => {
        if (id === focused && !isCollapsed) {
            setIsCollapsed(true);
        } else {
            setFocused(id);
            setIsCollapsed(false);
        }
    };

    // render components here and use <> </> in your component to have my stylings
    const renderFocus = () => {
        if (!focused) return null;

        switch (focused) {
            case 'button1':
                return <BackgroundManager />;
            case 'button2':
                return (
                    <>
                        <p>button 2</p>
                        <button
                            onClick={() => handleFocus('button1')}
                            className="p-[2.25rem] w-full">
                            <FontAwesomeIcon className="text-white text-4xl" icon={faImage} />
                        </button>
                    </>
                );
            case 'button3':
                return <PolyItems/>;
            case 'button4':
                return <p>button4</p>;
            case 'button5':
                return <p>button5</p>;
            default:
                return null;
        }
    };

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`flex h-screen overflow-hidden transition-all duration-200 p-0 ${isCollapsed ? 'w-[8rem]' : 'w-1/2'}`}>
            <div className="sidebar_left bg-[#311B52] flex flex-col">
                <ul className=" flex flex-col">
                    <button
                        onClick={() => handleFocus('button1')}
                        className={`p-[2.25rem] w-full ${focused === 'button1' && isCollapsed === false ? 'bg-[#4f2a86]' : ''}`}>
                        <FontAwesomeIcon className="text-white text-4xl" icon={faImage} />
                    </button>
                    <button
                        onClick={() => handleFocus('button2')}
                        className={`p-[2.25rem] w-full ${focused === 'button2' && isCollapsed === false ? 'bg-[#4f2a86]' : ''}`}
                    >
                        <FontAwesomeIcon className="text-white text-4xl" icon={faFont} />
                    </button>

                    <button
                        onClick={() => handleFocus('button3')}
                        className={`p-[2.25rem] w-full ${focused === 'button3' && isCollapsed === false ? 'bg-[#4f2a86]' : ''}`}
                    >
                        <FontAwesomeIcon className="text-white text-4xl" icon={faDownload} />
                    </button>

                    <button
                        onClick={() => handleFocus('button4')}
                        className={`p-[2.25rem] w-full ${focused === 'button4' && isCollapsed === false ? 'bg-[#4f2a86]' : ''}`}
                    >
                        <FontAwesomeIcon className="text-white text-4xl" icon={faCircleNodes} />
                    </button>

                    <button
                        onClick={() => handleFocus('button5')}
                        className={`p-[2.25rem] w-full ${focused === 'button5' && isCollapsed === false ? 'bg-[#4f2a86]' : ''}`}
                    >
                        <FontAwesomeIcon className="text-white text-4xl" icon={faShareFromSquare} />
                    </button>

                    <button onClick={toggleSidebar} className="p-[2.25rem] w-full">
                        <FontAwesomeIcon className="text-white text-4xl" icon={isCollapsed ? faArrowRight : faArrowLeft} />
                    </button>
                </ul>
            </div>
            <div className={`sidebar_right flex flex-col px-5 py-10 items-center transition-all duration-200 bg-[#4f2a86] ${isCollapsed ? 'w-0 opacity-0' : 'w-3/4 opacity-100'}`}>
                {isCollapsed ? null : renderFocus()}
            </div>
        </div>
    )
}

export default Sidebar;
