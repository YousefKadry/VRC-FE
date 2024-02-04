import { useDispatch, useSelector } from 'react-redux';
import { twJoin } from 'tailwind-merge';

import SharingComponent from './SharingComponent/SharingComponent';
import CustomButton from '../../shared/Button';

import { IAppStore } from '../../../models/app-store';
import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice';

const ShareRoom = () => {
    let isPublicLocal = useSelector((store: IAppStore) => store.rooms.selectedRoom?.isPublic);
    const roomID = useSelector((store: IAppStore) => store.rooms.selectedRoom?.id);

    const dispatch = useDispatch();

    const handleShareToggle = () => {
        dispatch(storeRoomsSliceActions.updateSelectedRoom({ isPublic: !isPublicLocal }));
    };

    return (
        <>
            {isPublicLocal ? (
                <SharingComponent
                    sharingURL={`${document.location.origin}/shared-room/${roomID}`}
                    RenderQR={true}
                />
            ) : null}

            <div className="flex-col w-full">
                <CustomButton
                    className={twJoin(
                        'from-RoomButtonGradient1 to-RoomButtonGradient2',
                        'w-full px-4 py-3 mt-0 text-base rounded-lg'
                    )}
                    onClick={handleShareToggle}
                >
                    {isPublicLocal ? 'Change room access to private' : 'Share Room'}
                </CustomButton>
            </div>
        </>
    );
};

export default ShareRoom;
