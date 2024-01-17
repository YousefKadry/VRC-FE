export interface IRoom<StateType> {
    id: string;
    title: string;
    description: string;
    state: StateType;
    isPublic: boolean;
}

export type TUpdatableRoomInfo = Partial<Omit<IRoom<any>, 'id' | 'state'>>;

export interface IRoomState {
    meshes: Record<string, IMesh>;
    selectedMeshId: IMesh['id'] | null;
    stars: boolean;
    clouds: boolean;
}

export type TUpdatableRoomStateInfo = Partial<Omit<IRoomState, 'meshes' | 'selectedMeshId'>>;

export type TVec3 = [number, number, number];

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

export interface IMesh {
    id: string;
    geometryType: TMeshGeometryType;
    position: TVec3;
    rotation: TVec3;
    scale: TVec3;
}

export type TUpdatableMeshInfo = Partial<Omit<IMesh, 'id'>>;
