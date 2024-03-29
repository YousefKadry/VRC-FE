export interface IRoom<StateType> {
    id: string;
    title: string;
    description: string;
    state: StateType;
    isPublic: boolean;
    ownerId: number;
    isUpdated: boolean;
    collaborators: Record<string, string>;
}

export type TUpdatableRoomInfo = Partial<
    Omit<IRoom<any>, 'id' | 'state' | 'isUpdated' | 'ownerId' | 'collaborators'>
>;

export type TRoomObjectsType = 'meshes' | 'clouds' | 'models' | 'texts' | 'lights';

export type TCoord = 'x' | 'y' | 'z';

export type TRoomEffects = 'stars' | 'sky' | 'basePlane' | 'ambientLight' | 'hideLightIcons' | 'castShadows';

export interface IRoomState {
    meshes: Record<string, IMesh>;
    clouds: Record<string, ICloud>;
    models: Record<string, IModel>;
    lights: Record<string, ILight>;
    background: string;
    texts: Record<string, IText>;
    stars: boolean;
    sky: boolean;
    basePlane: boolean;
    ambientLight: boolean;
    hideLightIcons: boolean;
    castShadows: boolean;
    selectedObjectInfo: {
        type: TRoomObjectsType;
        id: IRoomObject['id'];
    } | null;
}

export type TUpdatableRoomStateInfo = Partial<
    Omit<IRoomState, 'meshes' | 'clouds' | 'models' | 'texts' | 'lights' | 'selectedObjectInfo'>
>;

export type TVec3 = [number, number, number];

export interface IRoomObject {
    id: string;
    position: TVec3;
    rotation: TVec3;
    scale: TVec3;
}

export type TRoomObjectKeys = 'id' | 'position' | 'rotation' | 'scale';

export interface IColorfulObject extends IRoomObject {
    color: string;
}
export interface IObjectWithIntensity extends IColorfulObject {
    intensity: number;
}

export type TUpdatableRoomObjectInfo = Partial<Omit<IObjectWithIntensity, 'id'>>;

export interface ICloud extends IColorfulObject {}

export interface IModel extends IRoomObject {
    URL: string;
}

export interface IText extends IColorfulObject {
    text: string;
}

export type TMeshGeometryType =
    | 'box'
    | 'capsule'
    | 'circle'
    | 'cone'
    | 'cylinder'
    | 'dodecahedron'
    | 'extrude'
    | 'icosahedron'
    | 'lathe'
    | 'octahedron'
    | 'plane'
    | 'ring'
    | 'shape'
    | 'sphere'
    | 'tetrahedron'
    | 'torus'
    | 'torus-knot'
    | 'tube';

export interface IMesh extends IColorfulObject {
    geometryType: TMeshGeometryType;
}

export interface ILight extends IObjectWithIntensity {
    type: 'point' | 'spot';
}
