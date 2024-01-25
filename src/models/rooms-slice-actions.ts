import { Vector3 } from 'three';
import { ICloud, IMesh, IModel, IRoomObject } from './room';

export interface IAddObjectsAction {
    meshes?: Array<Omit<IMesh, 'id'>>;
    clouds?: Array<Omit<ICloud, 'id'>>;
    models?: Array<Omit<IModel, 'id'>>;
}

export interface IUpdateMeshGeometryAction {
    id: IRoomObject['id'];
    geometryType: IMesh['geometryType'];
}

export interface IUpdateCloudColorAction {
    id: IRoomObject['id'];
    color: ICloud['color'];
}

export interface IUpdateCloudPositionAction {
    id: IRoomObject['id'];
    newPosition: Vector3;
}

export interface IDeleteCloudAction {
    id: IRoomObject['id'];
}

export interface IUpdateModelURLAction {
    id: IRoomObject['id'];
    url: IModel['URL'];
}
