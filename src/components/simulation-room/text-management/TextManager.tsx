import { ChangeEvent, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { twJoin } from 'tailwind-merge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont } from '@fortawesome/free-solid-svg-icons';

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
                    'bg-simulation-room-sidebar-bg placeholder:text-simulation-room-sidebar-color text-simulation-room-sidebar-color',
                    'border border-simulation-room-bg'
                )}
                inputContainerProps={{ className: 'mt-0' }}
                placeholder="Enter your text here"
                Icon={<FontAwesomeIcon icon={faFont} className="text-simulation-room-sidebar-color" />}
                onChange={handleTextChange}
            />

            <div className="flex items-center justify-end">
                <CustomButton
                    className={twJoin(
                        'text-simulation-room-gradient-color from-simulation-room-gradient-from to-simulation-room-gradient-to',
                        'px-4 py-2.5 text-base rounded-lg'
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
