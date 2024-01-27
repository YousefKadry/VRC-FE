import { useDispatch, useSelector } from 'react-redux';

import AssetsInfiniteList from './AssetsInfiniteList.tsx';

import { TAppDispatch } from '../../../store/app-store.ts';
import { IAppStore } from '../../../models/app-store.ts';
import { storeAssetsSliceActions } from '../../../store/slices/assets/assets-slice.ts';
import { fetchNextGLTFsThunk } from '../../../store/slices/assets/assets-actions.ts';

const GLTFsAssets = () => {
    const gltfsInfo = useSelector((store: IAppStore) => store.assets.gltfsInfo);

    const dispatch = useDispatch<TAppDispatch>();

    const handleAllowingNextGLTFsFetching = () => {
        dispatch(storeAssetsSliceActions.updateGLTFsSearchInfo({ allowFetchingNextPage: true }));
    };

    const handleNextGLTFsFetching = () => {
        dispatch(fetchNextGLTFsThunk());
    };

    const handleQueryChanging = (query: string) => {
        dispatch(storeAssetsSliceActions.updateGLTFsSearchInfo({ q: query }));
    };

    return (
        <AssetsInfiniteList
            infiniteListContainerId="gltfs-inf-list-container"
            assetsInfo={gltfsInfo}
            searchInputPlaceholder="Search GLTFs"
            allowFetchingNextPageHandler={handleAllowingNextGLTFsFetching}
            fetchNextPageHandler={handleNextGLTFsFetching}
            changeQueryHandler={handleQueryChanging}
            clickAssetsItemHandler={console.log}
        />
    );
};

export default GLTFsAssets;
