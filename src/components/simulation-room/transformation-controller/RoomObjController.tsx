import { useControls } from 'leva';
import { IRoomObject, TVec3 } from '../../../models/room';
import { useEffect } from 'react';

const useRoomObjController = (args: {
    selectedObj: IRoomObject | null;
    transformationChangeHandler: (type: 'position' | 'rotation' | 'scale', value: TVec3) => void;
}) => {
    const { selectedObj, transformationChangeHandler } = args;

    const position = !selectedObj ? [0, 0, 0] : (selectedObj.position as any);
    const rotation = !selectedObj ? [0, 0, 0] : (selectedObj.rotation as any);
    const scale = !selectedObj ? [1, 1, 1] : (selectedObj.scale as any);

    const [_, update] = useControls('Transformations', () => {
        return {
            Translate: {
                value: position,
                step: 0.1,
                onChange: transformationChangeHandler.bind(null, 'position'),
            },
            Rotate: {
                value: rotation,
                step: 1.0,
                max: 180,
                min: -180,
                onChange: transformationChangeHandler.bind(null, 'rotation'),
            },
            Scale: {
                value: scale,
                step: 0.1,
                onChange: transformationChangeHandler.bind(null, 'scale'),
            },
        };
    });

    const mouseController = useControls(
        'Mouse Control',
        {
            Mode: {
                options: { translate: 'translate', rotate: 'rotate', scale: 'scale' },
            },
            'hide controller': false,
        },
        { collapsed: true }
    );

    useEffect(() => {
        update({ Translate: position, Rotate: rotation, Scale: scale });
    }, [position, rotation, scale]);

    return [mouseController.Mode, mouseController['hide controller']];
};

export default useRoomObjController;
