
import React from "react";
import classes from "./DashboardText.module.css";

const DashBoardText: React.FC<{ activeSlider: number }> = ({ activeSlider }) => {
  const radius = 180;

  const centerX = 276;
  const centerY = 276;

  const circlePath = `
    M ${centerX},${centerY - radius}
    a ${radius},${radius} 0 0,1 0,${2 * radius}
    a ${radius},${radius} 0 0,1 0,-${2 * radius}
  `;

  return (
    <div className={classes["dashboard-text-container"]} data-rotation={activeSlider}>
      <svg viewBox="0 0 552 552">
        <path id="curve" fill="transparent" d={circlePath}  />
        <text fill="white" fontSize="32px" fontFamily="Kavoon, sans-serif" letterSpacing={"3px"}>
          <textPath xlinkHref="#curve" startOffset="0" role="button" onClick={() => console.log("Join a room clicked")} style={{ cursor: 'pointer' }}>
            Enter A Room
          </textPath>
          <textPath xlinkHref="#curve" startOffset="31%" role="button" onClick={() => console.log("Create a room clicked")} style={{ cursor: 'pointer' }}>
            Build A Room
          </textPath>
          <textPath xlinkHref="#curve" startOffset="61%" role="button" onClick={() => console.log("View a room clicked")} style={{ cursor: 'pointer' }}>
            View My Rooms
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default DashBoardText;
