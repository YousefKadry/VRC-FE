import SharingComponent from './SharingComponent/SharingComponent';

const ShareRoom = () => {
    return <SharingComponent sharingURL={`${document.URL}/view`} RenderQR={true} />;
};

export default ShareRoom;
