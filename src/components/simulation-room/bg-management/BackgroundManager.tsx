import ImagePicker from './img-picker/ImagePicker';
import CameraPositionController from './camera-position/CameraPositionController';

const BackgroundManager = () => {
    return (
        <div className="w-full max-w-[460px] p-8">
            <ImagePicker getImageHandler={console.log} />
            <CameraPositionController />
        </div>
    );
};

export default BackgroundManager;
