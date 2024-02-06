import { useDispatch, useSelector } from 'react-redux';
import { twJoin } from 'tailwind-merge';

import AssetsInfiniteList from './AssetsInfiniteList.tsx';
import CustomButton from '../../shared/Button.tsx';

import { TAppDispatch } from '../../../store/app-store.ts';
import { IAppStore } from '../../../models/app-store.ts';
import { storeAssetsSliceActions } from '../../../store/slices/assets/assets-slice.ts';
import { fetchNextHDRIsThunk } from '../../../store/slices/assets/assets-actions.ts';
import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice.ts';
import { IRoomHDRI } from '../../../models/room-assets.ts';

const HDRIsAssets = () => {
    const hdrisInfo = useSelector((store: IAppStore) => store.assets.hdrisInfo);
    const activeBackground = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.background);

    const dispatch = useDispatch<TAppDispatch>();

    const handleAllowingNextHDRIsFetching = () => {
        dispatch(storeAssetsSliceActions.updateHDRIsSearchInfo({ allowFetchingNextPage: true }));
    };

    const handleNextHDRIsFetching = () => {
        dispatch(fetchNextHDRIsThunk());
    };

    const handleRoomAssetClicked = (item: IRoomHDRI) => {
        dispatch(storeRoomsSliceActions.updateSelectedRoomState({ background: item.hdriUrl }));
    };

    const handleQueryChanging = (query: string) => {
        dispatch(storeAssetsSliceActions.updateHDRIsSearchInfo({ q: query }));
    };

    const handleBackgroundRemoving = () => {
        dispatch(storeRoomsSliceActions.updateSelectedRoomState({ background: '' }));
    };

    return (
        <div className="w-full h-full">
            {activeBackground && (
                <CustomButton
                    className={twJoin(
                        'text-simulation-room-gradient-color from-simulation-room-gradient-from to-simulation-room-gradient-to',
                        'w-full px-4 py-3 mt-0 mb-4 text-base rounded-lg'
                    )}
                    onClick={handleBackgroundRemoving}
                >
                    Remove Background
                </CustomButton>
            )}

            <AssetsInfiniteList
                infiniteListContainerId="hdris-inf-list-container"
                assetsInfo={hdrisInfo}
                searchInputPlaceholder="Search HDRIs"
                allowFetchingNextPageHandler={handleAllowingNextHDRIsFetching}
                fetchNextPageHandler={handleNextHDRIsFetching}
                changeQueryHandler={handleQueryChanging}
                clickAssetsItemHandler={handleRoomAssetClicked}
            />
        </div>
    );
};

export default HDRIsAssets;
