import CustomButton from '../../shared/Button';
import CustomInput from '../../shared/Input';
import { ChangeEvent, useRef } from 'react';
import { storeRoomsSliceActions } from '../../../store/slices/rooms/rooms-slice.ts';
import { useDispatch } from 'react-redux';
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
        <div className="w-full px-8">
            <CustomInput
                handleChange={handleTextChange}
                type="text"
                placeholder="Enter your text here"
                className="bg-[#442a68] mt-[95px] pl-[18px] h-[60px] border-[1px] border-[#855EB5] text-center"
            />

            <div className=" flex items-center justify-end">
                <CustomButton
                    onClick={handleInsertText}
                    className="w-[120px] h-[40px] flex items-center justify-center bg-gradient-to-r from-[#9167C2] to-[#533b78]"
                >
                    Insert
                </CustomButton>
            </div>
        </div>
    );
};

export default TextManager;
