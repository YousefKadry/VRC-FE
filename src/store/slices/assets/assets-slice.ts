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
            isLoading: false,
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
        putGLTFs(storeRoomAssetsSlice, action: PayloadAction<Array<IRoomGLTF>>) {
            storeRoomAssetsSlice.gltfsInfo.items = action.payload;
        },
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
        putHDRIs(storeRoomAssetsSlice, action: PayloadAction<Array<IRoomHDRI>>) {
            storeRoomAssetsSlice.hdrisInfo.items = action.payload;
        },
        addHDRIs(storeRoomAssetsSlice, action: PayloadAction<Array<IRoomHDRI>>) {
            storeRoomAssetsSlice.hdrisInfo.items.push(...action.payload);
        },
        updateHDRIsSearchInfo(storeRoomAssetsSlice, action: PayloadAction<Partial<IRoomAssetsSearchInfo>>) {
            if (
                action.payload.q === undefined ||
                action.payload.q === storeRoomAssetsSlice.hdrisInfo.searchInfo.q
            ) {
                storeRoomAssetsSlice.hdrisInfo.searchInfo = {
                    ...storeRoomAssetsSlice.hdrisInfo.searchInfo,
                    ...action.payload,
                };

                return;
            }

            // if the query changed we need to reset all info
            storeRoomAssetsSlice.hdrisInfo = getAssetsInitState<IRoomHDRI>();
            storeRoomAssetsSlice.hdrisInfo.searchInfo.q = action.payload.q || '';
        },
    },
});

export const storeAssetsSliceActions = assetsSlice.actions;

export default assetsSlice;
