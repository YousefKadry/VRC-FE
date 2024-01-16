import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppRoutes from './routes/AppRoutes.tsx';
import Notification from './components/ui/notification/Notification.tsx';
import Spinner from './components/ui/spinner/Spinner.tsx';

import { IAppStore } from './models/app-store.ts';
import { TAppDispatch } from './store/app-store.ts';
import { autoLoginThunk } from './store/slices/auth/auth-actions.ts';
import { storeUISliceActions } from './store/slices/ui/ui-slice.ts';
import { fetchRoomsThunk, saveSelectedRoomThunk } from './store/slices/rooms/rooms-actions.ts';
import { storeRoomsSliceActions } from './store/slices/rooms/rooms-slice.ts';

function App() {
    const notification = useSelector((store: IAppStore) => store.ui.notification);
    const isLoading = useSelector((store: IAppStore) => store.ui.isLoading);

    const rooms = useSelector((store: IAppStore) => store.rooms.rooms);
    const meshes = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.meshes);
    
    const dispatch = useDispatch<TAppDispatch>();

    useEffect(() => {
        dispatch(autoLoginThunk());
        dispatch(fetchRoomsThunk())
    }, [])

    useEffect(() => {
        if(!rooms || Object.keys(rooms).length === 0){
            return;
        }
        
        dispatch(storeRoomsSliceActions.setSelectedRoom('857d2571-4cfb-4324-ac36-f2d022616dcf'))
        dispatch(storeRoomsSliceActions.addMesh({
            geometryType: 'box',
            position: [0, 0, 0],
            rotation: [0, 0, 0],
            scale: [1, 1, 1],
        }))
        // dispatch(saveSelectedRoomThunk())
    }, [rooms]);

    useEffect(() => {
        if(!meshes || Object.keys(meshes).length === 0){
            return;
        }
        
        dispatch(storeRoomsSliceActions.setSelectedMeshId(Object.keys(meshes)[0]))
    }, [meshes]);
    const handleNotificationDisappearing = () => {
        dispatch(storeUISliceActions.setNotification(null));
    };

    return (
        <>
            <Notification
                notification={notification}
                notificationDisappearingHandler={handleNotificationDisappearing}
            />

            <Spinner loading={isLoading} />

            <React.Suspense fallback={<Spinner loading={isLoading} />}>
                <AppRoutes />
            </React.Suspense>
        </>
    );
}

export default App;
