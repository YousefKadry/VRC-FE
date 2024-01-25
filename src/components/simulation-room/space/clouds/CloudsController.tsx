import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeRoomsSliceActions } from '../../../../store/slices/rooms/rooms-slice';
import { Vector3 } from 'three';
import RangeInput from '../../../ui/range-input/RangeInput';

interface CloudControllerProps {
    cloudId: string;
    initialColor: string;
    initialPosition: Vector3;
}
const CloudController: React.FC<CloudControllerProps> = ({ cloudId, initialColor, initialPosition }) => {
    const dispatch = useDispatch();
    const [color, setColor] = useState(initialColor);
    const [position, setPosition] = useState(initialPosition);

    const handleColorChange = (newColor: string) => {
        dispatch(storeRoomsSliceActions.updateCloudColor({ id: cloudId, color: newColor }));
        setColor(newColor);
    };

    const handlePositionChange = (axis: 'x' | 'y' | 'z', event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(event.target.value);
        const newPosition = new Vector3(position.x, position.y, position.z);
        newPosition[axis] = newValue;
        dispatch(storeRoomsSliceActions.updateCloudPosition({ id: cloudId, newPosition: newPosition }));
        setPosition(newPosition);
    };

    const handleDeleteCloud = () => {
        dispatch(storeRoomsSliceActions.deleteCloud({ id: cloudId }));
    };

    return (
        <div className="w-80 mt-4 py-4 px-12 rounded-md mb-4 bg-gradient-to-r from-[#7c58a6] to-[#533b78] ">
            <div className=" mb-2">
                <RangeInput
                    id="x-range"
                    name="x"
                    label="X"
                    value={position.x}
                    min={-30}
                    max={30}
                    onChange={(e) => handlePositionChange('x', e)}
                />
            </div>
            <div className="mb-2">
                <RangeInput
                    id="y-range"
                    name="y"
                    label="Y"
                    value={position.y}
                    min={-30}
                    max={30}
                    onChange={(e) => handlePositionChange('y', e)}
                />
            </div>
            <div className=" mb-4">
                <RangeInput
                    id="z-range"
                    name="z"
                    label="Z"
                    value={position.z}
                    min={-20}
                    max={20}
                    onChange={(e) => handlePositionChange('z', e)}
                />
            </div>
            <div className="flex items-center mb-4 ">
                <label className="">Color:</label>
                <div className="relative flex ml-2 ">
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => handleColorChange(e.target.value)}
                        className="appearance-none h-8  border border-gray-900 rounded-md"
                    />
                    <button
                        className="flex items-center p-1 rounded-full ml-24 bg-[#7c58a6] border border-[#301934] border-2 hover:bg-[#8f65bf]"
                        onClick={handleDeleteCloud}
                    >
                        <svg
                            className="w-6 h-6 text-[#301934] cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.8"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CloudController;
