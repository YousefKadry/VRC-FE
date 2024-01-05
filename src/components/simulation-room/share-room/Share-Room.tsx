import SharingComponent from "./SharingComponent/SharingComponent";

const ShareRoom = () => {
  return (
     <>
        <SharingComponent SharingURL={"MOCKURL::www.tobechanged.com"} RenderQR={true} ShowMessage={true}/>
      </>
  );
}

export default ShareRoom;