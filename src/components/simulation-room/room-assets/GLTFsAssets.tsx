import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { twJoin } from 'tailwind-merge';
import { debounce } from 'lodash';

import RoomAssetsItem from './RoomAssetsItem.tsx';
import CustomInput from '../../shared/Input.tsx';

import { fetchNextGLTFsThunk } from '../../../store/slices/assets/assets-actions.ts';
import { TAppDispatch } from '../../../store/app-store.ts';
import { IAppStore } from '../../../models/app-store.ts';
import { storeAssetsSliceActions } from '../../../store/slices/assets/assets-slice.ts';
import { BeatLoader } from 'react-spinners';

const GLTFsAssets = () => {
    const { items: gltfs, searchInfo } = useSelector((store: IAppStore) => store.assets.gltfsInfo);
    const { pageNumber, q, hasNext, allowFetchingNextPage,isLoading } = searchInfo;

    const dispatch = useDispatch<TAppDispatch>();

    const { ref: listEndElementRef, inView: isListEndElementInView } = useInView({
        triggerOnce: true,
        threshold: 0,
        root: document.getElementById('inf-list-container'),
        rootMargin: '500px',
    });

    useEffect(() => {
        if (!isListEndElementInView || !hasNext) {
            return;
        }

        dispatch(
            storeAssetsSliceActions.updateGLTFsSearchInfo({
                allowFetchingNextPage: true,
            })
        );
    }, [isListEndElementInView, hasNext]);

    useEffect(() => {
        if (!allowFetchingNextPage) {
            return;
        }

        dispatch(fetchNextGLTFsThunk());
    }, [pageNumber, q, allowFetchingNextPage]);

    const handleSearchQuery = useCallback(
        debounce((e: React.ChangeEvent<HTMLInputElement>) => {
            dispatch(
                storeAssetsSliceActions.updateGLTFsSearchInfo({
                    q: e.target.value,
                })
            );
        }, 500),
        []
    );

    return (
        <div className={'flex flex-col space-y-10 w-full h-full'}>
            <CustomInput
                type="text"
                className={twJoin(
                    'w-full text-center outline-none',
                    'bg-gradient-to-r from-[#7542b0] to-[#7d5cae] text-white placeholder:text-white/80'
                )}
                placeholder="Search GLTFs"
                handleChange={handleSearchQuery}
                disabled={isLoading}
            />

            <div id="inf-list-container" className="overflow-auto h-full">
                <ul className="grid grid-cols-2 gap-4 select-none">
                    {gltfs.map((gltf, idx) => {
                        return (
                            <RoomAssetsItem
                                ref={idx === gltfs.length - 1 ? listEndElementRef : undefined}
                                key={gltf.name}
                                item={gltf}
                            />
                        );
                    })}
                </ul>
                {isLoading &&  <BeatLoader/>}
            </div>
        </div>
    );
};

export default GLTFsAssets;
