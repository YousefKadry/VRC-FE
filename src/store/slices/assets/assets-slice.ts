import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IStoreAssetsSlice } from '../../../models/app-store';
import { IRoomAssetsInfo, IRoomAssetsSearchInfo, IRoomGLTF, IRoomHDRI } from '../../../models/room-assets';

function getAssetsInitState<AssetsType>(): IRoomAssetsInfo<AssetsType> {
    return {
        searchInfo: {
            q: '',
            pageSize: 50,
            pageNumber: 0,
            allowFetchingNextPage: true,
            hasNext: true,
        },
        items: [],
    };
}

const initialState: IStoreAssetsSlice = {
    gltfsInfo: getAssetsInitState<IRoomGLTF>(),
    hdrisInfo: getAssetsInitState<IRoomHDRI>(),
};

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        addGLTFs(storeRoomAssetsSlice, action: PayloadAction<Array<IRoomGLTF>>) {
            storeRoomAssetsSlice.gltfsInfo.items.push(...action.payload);
        },
        updateGLTFsSearchInfo(storeRoomAssetsSlice, action: PayloadAction<Partial<IRoomAssetsSearchInfo>>) {
            if (
                action.payload.q === undefined ||
                action.payload.q === storeRoomAssetsSlice.gltfsInfo.searchInfo.q
            ) {
                storeRoomAssetsSlice.gltfsInfo.searchInfo = {
                    ...storeRoomAssetsSlice.gltfsInfo.searchInfo,
                    ...action.payload,
                };

                return;
            }

            // if the query changed we need to reset all info
            storeRoomAssetsSlice.gltfsInfo = getAssetsInitState<IRoomGLTF>();
            storeRoomAssetsSlice.gltfsInfo.searchInfo.q = action.payload.q || '';
        },
    },
});

export const storeAssetsSliceActions = assetsSlice.actions;

export default assetsSlice;
