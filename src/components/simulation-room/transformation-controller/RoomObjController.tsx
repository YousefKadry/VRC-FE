import { button, useControls } from 'leva';
import { IRoomObject, IColorfulObject, TVec3 } from '../../../models/room';
import { useEffect } from 'react';

const useRoomObjController = (args: {
    selectedObj: IRoomObject | null;
    transformationChangeHandler: (type: 'position' | 'rotation' | 'scale', value: TVec3) => void;
    changeColorHandler: (color: string) => void;
    deleteObjectHandler: () => void;
    unselectObjectHandler: () => void;
    changeIntensityHandler: (intensity: number) => void;
}) => {
    const {
        selectedObj,
        transformationChangeHandler,
        changeColorHandler,
        deleteObjectHandler,
        unselectObjectHandler,
        changeIntensityHandler,
    } = args;

    const position = !selectedObj ? [0, 0, 0] : (selectedObj.position as any);
    const rotation = !selectedObj ? [0, 0, 0] : (selectedObj.rotation as any);
    const scale = !selectedObj ? [1, 1, 1] : (selectedObj.scale as any);

    const [_, updateTransformations] = useControls(
        'Transformations',
        () => {
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
        },
        { order: 1 },
        undefined,
        []
    );

    const mouseController = useControls(
        'Mouse Control',
        {
            Mode: {
                options: { translate: 'translate', rotate: 'rotate', scale: 'scale' },
            },
            'hide controller': false,
        },
        { collapsed: true, order: 2 },
        undefined,
        []
    );

    const [__, updateColor] = useControls(
        'Color',
        () => {
            if (!(selectedObj && 'color' in selectedObj)) {
                return {} as any;
            }

            if (selectedObj && 'intensity' in selectedObj) {
                return {
                    color: {
                        value: selectedObj.color,
                        onChange: (color) => {
                            changeColorHandler(color);
                        },
                    },
                    intensity: {
                        value: selectedObj.intensity,
                        step: 1,
                        min: 0,
                        onChange: (intensity) => {
                            changeIntensityHandler(intensity);
                        },
                    },
                };
            }
            return {
                color: {
                    value: selectedObj.color,
                    onChange: (color) => {
                        changeColorHandler(color);
                    },
                },
            };
        },
        { collapsed: true, order: 3 },
        undefined,
        [selectedObj]
    );

    useControls(
        'Actions',
        () => {
            return {
                Delete: button(deleteObjectHandler),
                Unselect: button(unselectObjectHandler),
            };
        },
        { collapsed: true, order: 4 },
        undefined,
        [selectedObj]
    );

    useEffect(() => {
        updateTransformations({ Translate: position, Rotate: rotation, Scale: scale });

        if (selectedObj && 'color' in selectedObj) {
            updateColor({ color: (selectedObj as IColorfulObject).color });
        }
        if (selectedObj && 'intensity' in selectedObj) {
            updateColor({ intensity: selectedObj.intensity });
        }
    }, [position, rotation, scale, selectedObj]);

    return [mouseController.Mode, mouseController['hide controller']];
};

export default useRoomObjController;
