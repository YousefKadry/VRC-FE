import { ChangeEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { twJoin } from 'tailwind-merge';

import CustomButton from '../../shared/Button';
import Input from '../../shared/Input';

import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice.ts';
import { TAppDispatch } from '../../../store/app-store.ts';

const TextManager = () => {
    const dispatch = useDispatch<TAppDispatch>();

    const textRef = useRef<string>('');

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
        textRef.current = e.target.value;
    };

    const handleInsertText = () => {
        if (!textRef.current || textRef.current === '') {
            return;
        }

        dispatch(
            storeRoomsSliceActions.addObjects({
                texts: [{ text: textRef.current, color: '#ffffff' }],
            })
        );
    };

    return (
        <div className="w-full">
            <Input
                type="text"
                id="text"
                className={twJoin(
                    'bg-[#442a68] placeholder:text-white border-[1px] border-purple-700',
                    'text-center outline-none'
                )}
                placeholder="Enter your text here"
                onChange={handleTextChange}
            />

            <div className="flex items-center justify-end">
                <CustomButton
                    className={twJoin(
                        'from-RoomButtonGradient1 to-RoomButtonGradient2',
                        'w-fit max-w-full px-12 py-2.5 text-base rounded-lg'
                    )}
                    onClick={handleInsertText}
                >
                    Insert
                </CustomButton>
            </div>
        </div>
    );
};

export default TextManager;
