import CameraPositionController from './camera-position/CameraPositionController';

const CameraManager = () => {
    return (
        <div className="w-full max-w-[460px] px-8">
            <CameraPositionController />
        </div>
    );
};

export default CameraManager;
