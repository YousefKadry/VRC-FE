import { useDispatch, useSelector } from 'react-redux';

import AssetsInfiniteList from './AssetsInfiniteList.tsx';

import { TAppDispatch } from '../../../store/app-store.ts';
import { IAppStore } from '../../../models/app-store.ts';
import { storeAssetsSliceActions } from '../../../store/slices/assets/assets-slice.ts';
import { fetchNextGLTFsThunk } from '../../../store/slices/assets/assets-actions.ts';
import { IRoomGLTF } from '../../../models/room-assets.ts';
import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice.ts';

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

    const handleAddingGLTFToRoom = (gltf: IRoomGLTF) => {
        dispatch(storeRoomsSliceActions.addObjects({ models: [{ URL: gltf.gltfUrl }] }));
    };

    return (
        <AssetsInfiniteList
            infiniteListContainerId="gltfs-inf-list-container"
            assetsInfo={gltfsInfo}
            searchInputPlaceholder="Search GLTFs"
            allowFetchingNextPageHandler={handleAllowingNextGLTFsFetching}
            fetchNextPageHandler={handleNextGLTFsFetching}
            changeQueryHandler={handleQueryChanging}
            clickAssetsItemHandler={handleAddingGLTFToRoom}
        />
    );
};

export default GLTFsAssets;
