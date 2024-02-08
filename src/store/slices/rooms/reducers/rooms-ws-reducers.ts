import { Client } from '@stomp/stompjs';
import { PayloadAction } from '@reduxjs/toolkit';

import { IStoreRoomsSlice } from '../../../../models/app-store';

const roomsWSReducers = {
    subscribeToRoomTopic(
        storeRoomsSlice: IStoreRoomsSlice,
        action: PayloadAction<{ topic: string; wsClient: Client }>
    ) {
        const { topic, wsClient } = action.payload;
        storeRoomsSlice.wsSubscriptions[topic] = wsClient;
    },

    unsubscribeFromRoomTopic(storeRoomsSlice: IStoreRoomsSlice, action: PayloadAction<string>) {
        const topic = action.payload;

        if (!storeRoomsSlice.wsSubscriptions[topic]) {
            return;
        }

        storeRoomsSlice.wsSubscriptions[topic].deactivate();

        delete storeRoomsSlice.wsSubscriptions[topic];
    },
};

export default roomsWSReducers;
