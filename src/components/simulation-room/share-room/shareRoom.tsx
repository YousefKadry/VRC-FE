import { useDispatch, useSelector } from 'react-redux';
import SharingComponent from './SharingComponent/SharingComponent';
import { IAppStore } from '../../../models/app-store';
import CustomButton from '../../shared/Button';
import { twJoin } from 'tailwind-merge';
import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice';



const ShareRoom = () => {
    let isPublicLocal = useSelector((store: IAppStore) => store.rooms.selectedRoom?.isPublic);
    const roomID = useSelector((store: IAppStore) => store.rooms.selectedRoom?.id)

    const dispatch = useDispatch()

    const handleShareToggle = () =>
    {
        dispatch(storeRoomsSliceActions.updateSelectedRoom({isPublic:!isPublicLocal}))
    }

    return (
        <>
        {isPublicLocal ? <SharingComponent sharingURL={`${document.location.origin}/shared-room/${roomID}`} RenderQR={true} /> : ""}      
        <div className="flex-col w-full max-w-[460px] p-8 space-y-10">
            <CustomButton
                onClick={handleShareToggle}
                className={twJoin('from-RoomButtonGradient1 to-RoomButtonGradient2', 
                'w-full p-[1rem] m-0'
                )}
            >
                {isPublicLocal ? "Change room access to private": "Share Room"}
            </CustomButton>
        </div>
        </>
    )
};

export default ShareRoom;
