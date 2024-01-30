import { useDispatch, useSelector } from 'react-redux';

import AssetsInfiniteList from './AssetsInfiniteList.tsx';

import { TAppDispatch } from '../../../store/app-store.ts';
import { IAppStore } from '../../../models/app-store.ts';
import { storeAssetsSliceActions } from '../../../store/slices/assets/assets-slice.ts';
import { fetchNextHDRIsThunk } from '../../../store/slices/assets/assets-actions.ts';

const HDRIsAssets = () => {
    const hdrisInfo = useSelector((store: IAppStore) => store.assets.hdrisInfo);

    const dispatch = useDispatch<TAppDispatch>();

    const handleAllowingNextHDRIsFetching = () => {
        dispatch(storeAssetsSliceActions.updateHDRIsSearchInfo({ allowFetchingNextPage: true }));
    };

    const handleNextHDRIsFetching = () => {
        dispatch(fetchNextHDRIsThunk());
    };

    const handleQueryChanging = (query: string) => {
        dispatch(storeAssetsSliceActions.updateHDRIsSearchInfo({ q: query }));
    };

    return (

        <AssetsInfiniteList
            infiniteListContainerId="hdris-inf-list-container"
            assetsInfo={hdrisInfo}
            searchInputPlaceholder="Search HDRIs"
            allowFetchingNextPageHandler={handleAllowingNextHDRIsFetching}
            fetchNextPageHandler={handleNextHDRIsFetching}
            changeQueryHandler={handleQueryChanging}
            clickAssetsItemHandler={console.log}
        />
        
    );
};

export default HDRIsAssets;
