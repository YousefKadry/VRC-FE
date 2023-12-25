import classes from "./DashboardText.module.css"

const DashBoardText = () => {
  const handleJoinRoomClick = () => {
    console.log("Join a room clicked");
  };

  const handleCreateRoomClick = () => {
    console.log("Create a room clicked");
  };

  const handleViewRoomClick = () => {
    console.log("View a room clicked");
  };

  return (
<div className={classes["dashboard-text-container"]}>
    <svg  viewBox="0 0 400 400">
      <path id="curve" fill="transparent" d="
        M 200,300
        a 100,100 0 0,1 0,-200
        a 100,100 0 0,1 0,200
      "/>

      <text fill="white" fontSize="3vh"> 
        <textPath xlinkHref="#curve" startOffset="10%" onClick={handleJoinRoomClick} style={{ cursor: 'pointer' }}>
          Enter A Room
        </textPath>
        <textPath xlinkHref="#curve" startOffset="39%" onClick={handleCreateRoomClick} style={{ cursor: 'pointer' }}>
          Build A Room
        </textPath>
        <textPath xlinkHref="#curve" startOffset="68%" onClick={handleViewRoomClick} style={{ cursor: 'pointer' }}>
          View Rooms
        </textPath>
      </text>
    </svg>
    </div>
  );
};

export default DashBoardText;
