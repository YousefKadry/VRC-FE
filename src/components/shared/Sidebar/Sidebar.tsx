import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faDownload,
  faShareFromSquare,
  faFont,
  faCircleNodes,
  faArrowRight,
  faArrowLeft,
  faStarHalfStroke
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CustomInput from "../Input";
import CustomButton from "../Button";
import ShareRoom from "../../simulation-room/share-room/Share-Room.tsx";
import BackgroundManager from "../../simulation-room/bg-management/BackgroundManager";
import AddMesh from "../../simulation-room/object-editor/AddMesh";
import PolyItems from "../../simulation-room/poly-items/PolyItems.tsx";
import SpecialEffects from "../../simulation-room/special-effects/SpecialEffects.tsx";

const Sidebar = () => {
  const [focused, setFocused] = useState("");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleFocus = (id: string) => {
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
      case "button1":
        return <BackgroundManager />;
      case "button2":
        return (
          <>
            <div className="w-full px-[70px] ">
              <CustomInput
                type="text"
                placeholder="Enter your text here"
                className="bg-[#442a68] mt-[95px] pl-[18px] h-[60px] border-[1px] border-[#855EB5] text-center"
              />
              <div className=" flex items-center justify-end">
                <CustomButton className="w-[120px] h-[40px] flex items-center justify-center bg-gradient-to-r from-[#9167C2] to-[#533b78]">
                  Insert
                </CustomButton>
              </div>
            </div>
          </>
        );
      case "button3":
        return <PolyItems/>;
      case "button4":
        return <AddMesh />;
      case "button5":
        return <ShareRoom/>
      case "special-effect":
          return <SpecialEffects />
      default:
        return null;
    }
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`flex h-screen overflow-hidden transition-all duration-200 p-0 ${
        isCollapsed ? "w-[8rem]" : "w-1/2"
      }`}
    >
      <div className="sidebar_left bg-[#1E083C] flex flex-col">
        <ul className=" flex flex-col">
          <button
            onClick={() => handleFocus("button1")}
            className={`p-[2.25rem] w-full ${
              focused === "button1" && isCollapsed === false
                ? "bg-[#311B52]"
                : ""
            }`}
          >
            <FontAwesomeIcon className="text-white text-4xl" icon={faImage} />
          </button>
          <button
            onClick={() => handleFocus("button2")}
            className={`p-[2.25rem] w-full ${
              focused === "button2" && isCollapsed === false
                ? "bg-[#311B52]"
                : ""
            }`}
          >
            <FontAwesomeIcon className="text-white text-4xl" icon={faFont} />
          </button>

          <button
            onClick={() => handleFocus("button3")}
            className={`p-[2.25rem] w-full ${
              focused === "button3" && isCollapsed === false
                ? "bg-[#311B52]"
                : ""
            }`}
          >
            <FontAwesomeIcon
              className="text-white text-4xl"
              icon={faDownload}
            />
          </button>

          <button
            onClick={() => handleFocus("special-effect")}
            title="Special Effects"
            className={`p-[2.25rem] w-full ${
              focused === "special-effect" && isCollapsed === false
                ? "bg-[#311B52]"
                : ""
            }`}
          >
            <FontAwesomeIcon
              className="text-white text-4xl"
              icon={faStarHalfStroke}
            />
          </button>

          <button
            onClick={() => handleFocus("button4")}
            className={`p-[2.25rem] w-full ${
              focused === "button4" && isCollapsed === false
                ? "bg-[#311B52]"
                : ""
            }`}
          >
            <FontAwesomeIcon
              className="text-white text-4xl"
              icon={faCircleNodes}
            />
          </button>

          <button
            onClick={() => handleFocus("button5")}
            className={`p-[2.25rem] w-full ${
              focused === "button5" && isCollapsed === false
                ? "bg-[#311B52]"
                : ""
            }`}
          >
            <FontAwesomeIcon
              className="text-white text-4xl"
              icon={faShareFromSquare}
            />
          </button>

          <button onClick={toggleSidebar} className="p-[2.25rem] w-full">
            <FontAwesomeIcon
              className="text-white text-4xl"
              icon={isCollapsed ? faArrowRight : faArrowLeft}
            />
          </button>
        </ul>
      </div>
      <div
        className={`sidebar_right flex flex-col px-5 py-10 items-center transition-all duration-200 bg-[#311B52] ${
          isCollapsed ? "w-0 opacity-0" : "w-3/4 opacity-100"
        }`}
      >
        {isCollapsed ? null : renderFocus()}
      </div>
    </div>
  );
};

export default Sidebar;
