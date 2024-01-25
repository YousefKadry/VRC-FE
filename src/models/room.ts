export interface IRoom<StateType> {
    id: string;
    title: string;
    description: string;
    state: StateType;
    isPublic: boolean;
    isUpdated: boolean;
}

export type TUpdatableRoomInfo = Partial<Omit<IRoom<any>, 'id' | 'state' | 'isUpdated'>>;

export type TRoomObjectsType = 'meshes' | 'clouds' | 'models';

export interface IRoomState {
    meshes: Record<string, IMesh>;
    clouds: Record<string, ICloud>;
    models: Record<string, IModel>;
    stars: boolean;
    selectedObjectInfo: {
        type: TRoomObjectsType;
        id: IRoomObject['id'];
    } | null;
}

export type TUpdatableRoomStateInfo = Partial<
    Omit<IRoomState, 'meshes' | 'clouds' | 'models' | 'selectedObjectInfo'>
>;

export type TVec3 = [number, number, number];

export interface IRoomObject {
    id?: string;
    position: TVec3;
    rotation: TVec3;
    scale: TVec3;
}

export type TUpdatableRoomObjectInfo = Partial<Omit<IRoomObject, 'id'>>;

export interface ICloud extends IRoomObject {
    color: string;
}

export interface IModel extends IRoomObject {
    URL: string;
}

export type TMeshGeometryType =
    | 'box'
    | 'capsule'
    | 'circle'
    | 'cone'
    | 'cylinder'
    | 'dodecahedron'
    | 'edges'
    | 'extrude'
    | 'icosahedron'
    | 'lathe'
    | 'octahedron'
    | 'plane'
    | 'polyhedron'
    | 'ring'
    | 'shape'
    | 'sphere'
    | 'tetrahedron'
    | 'torus'
    | 'torus-knot'
    | 'tube'
    | 'wireframe';

export interface IMesh extends IRoomObject {
    geometryType: TMeshGeometryType;
}
