import { Dispatch } from '@reduxjs/toolkit';

import AxiosUtil from '../../../utilities/axios';
import appStore from '../../app-store';
import { storeAssetsSliceActions } from './assets-slice';

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const fetchNextGLTFsThunk = () => {
    return async (dispatch: Dispatch) => {
        const { q, pageNumber, pageSize } = appStore.getState().assets.gltfsInfo.searchInfo;

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
            { showSpinner: pageNumber === 0 }
        );

        if (!data) {
            return;
        }

        dispatch(storeAssetsSliceActions.addGLTFs(data.models));

        dispatch(
            storeAssetsSliceActions.updateGLTFsSearchInfo({
                pageNumber: pageNumber + 1,
                hasNext: data.hasNext,
                allowFetchingNextPage: false,
                isLoading:false
            })
        );
    };
};
