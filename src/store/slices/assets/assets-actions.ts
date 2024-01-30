import { Dispatch } from '@reduxjs/toolkit';

import AxiosUtil from '../../../utilities/axios';
import appStore from '../../app-store';
import { storeAssetsSliceActions } from './assets-slice';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const fetchNextGLTFsThunk = () => {
    return async (dispatch: Dispatch) => {
        const { q, pageNumber, pageSize } = appStore.getState().assets.gltfsInfo.searchInfo;

        dispatch(storeAssetsSliceActions.updateGLTFsSearchInfo({ isLoading: true }));

        const data = await AxiosUtil.sendRequest(
            {
                url: `${SERVER_URL}/api/models`,
                method: 'GET',
                params: {
                    q,
                    pageSize,
                    pageNumber: pageNumber + 1,
                },
            },
            { showSpinner: false }
        );

        if (!data) {
            return;
        }

        if (pageNumber === 0) {
            dispatch(storeAssetsSliceActions.putGLTFs(data.models));
        } else {
            dispatch(storeAssetsSliceActions.addGLTFs(data.models));
        }

        dispatch(
            storeAssetsSliceActions.updateGLTFsSearchInfo({
                pageNumber: pageNumber + 1,
                hasNext: data.hasNext,
                allowFetchingNextPage: false,
                isLoading: false,
            })
        );
    };
};

export const fetchNextHDRIsThunk = () => {
    return async (dispatch: Dispatch) => {
        const { q, pageNumber, pageSize } = appStore.getState().assets.hdrisInfo.searchInfo;

        dispatch(storeAssetsSliceActions.updateHDRIsSearchInfo({ isLoading: true }));

        const data = await AxiosUtil.sendRequest(
            {
                url: `${SERVER_URL}/api/hdris`,
                method: 'GET',
                params: {
                    q,
                    pageSize,
                    pageNumber: pageNumber + 1,
                },
            },
            { showSpinner: false }
        );

        if (!data) {
            return;
        }

        if (pageNumber === 0) {
            dispatch(storeAssetsSliceActions.putHDRIs(data.models));
        } else {
            dispatch(storeAssetsSliceActions.addHDRIs(data.models));
        }

        dispatch(
            storeAssetsSliceActions.updateHDRIsSearchInfo({
                pageNumber: pageNumber + 1,
                hasNext: data.hasNext,
                allowFetchingNextPage: false,
                isLoading: false,
            })
        );
    };
};
