import RangeInput from '../../../ui/range-input/RangeInput';

import { TCoord } from '../../../../models/room';

const coords: Array<TCoord> = ['x', 'y', 'z'];

const CameraPositionController = () => {
    const handlePositionChanging = (coord: TCoord, event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(coord, event.target.value);
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Position</h2>

            <div className="flex flex-col gap-4">
                {coords.map((coord) => {
                    return (
                        <RangeInput
                            key={coord}
                            id={`${coord}Coord`}
                            name={`${coord}Coord`}
                            label={coord.toUpperCase()}
                            primaryBg="rgb(var(--simulation-room-sidebar-bg))"
                            secondaryBg="rgb(var(--simulation-room-sidebar-color))"
                            onChange={handlePositionChanging.bind(null, coord)}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default CameraPositionController;
