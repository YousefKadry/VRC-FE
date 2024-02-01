export interface IRoom<StateType> {
    id: string;
    title: string;
    description: string;
    state: StateType;
    isPublic: boolean;
    isUpdated: boolean;
}

export type TUpdatableRoomInfo = Partial<Omit<IRoom<any>, 'id' | 'state' | 'isUpdated'>>;

export type TRoomObjectsType = 'meshes' | 'clouds' | 'models' | 'texts';

export interface IRoomState {
    meshes: Record<string, IMesh>;
    clouds: Record<string, ICloud>;
    models: Record<string, IModel>;
    background: string;
    texts: Record<string, IText>;
    stars: boolean;
    sky: boolean;
    basePlane: boolean;
    selectedObjectInfo: {
        type: TRoomObjectsType;
        id: IRoomObject['id'];
    } | null;
}

export type TUpdatableRoomStateInfo = Partial<
    Omit<IRoomState, 'meshes' | 'clouds' | 'models' | 'texts' | 'selectedObjectInfo'>
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

export type TUpdatableRoomObjectInfo = Partial<Omit<IColorfulObject, 'id'>>;

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
