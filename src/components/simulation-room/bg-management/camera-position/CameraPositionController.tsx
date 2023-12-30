import RangeInput from '../../../ui/range-input/RangeInput';

const CameraPositionController = () => {
    const handlePositionChanging = (coord: 'x' | 'y' | 'z', event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(coord, event.target.value);
    };

    return (
        <div className="mt-10">
            <h2 className="text-xl font-bold my-4">Position</h2>

            <div className="flex flex-col gap-4">
                <RangeInput
                    id="xCoord"
                    name="xCoord"
                    label="X"
                    onChange={handlePositionChanging.bind(null, 'x')}
                />

                <RangeInput
                    id="yCoord"
                    name="yCoord"
                    label="Y"
                    onChange={handlePositionChanging.bind(null, 'y')}
                />

                <RangeInput
                    id="zCoord"
                    name="zCoord"
                    label="Z"
                    onChange={handlePositionChanging.bind(null, 'z')}
                />
            </div>
        </div>
    );
};

export default CameraPositionController;
