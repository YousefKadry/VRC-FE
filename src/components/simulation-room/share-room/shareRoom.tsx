import SharingComponent from "./SharingComponent/sharingComponent";


const ShareRoom = () => {
  return (
     <>
        <SharingComponent sharingURL={`${document.URL}/view`} RenderQR={true}/>
      </>
  );
}

export default ShareRoom;