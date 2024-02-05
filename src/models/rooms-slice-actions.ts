import { ICloud, ILight, IMesh, IModel, IText, TRoomObjectKeys } from './room';

export interface IAddObjectsAction {
    meshes?: Array<Omit<IMesh, TRoomObjectKeys>>;
    clouds?: Array<Omit<ICloud, TRoomObjectKeys>>;
    models?: Array<Omit<IModel, TRoomObjectKeys>>;
    texts?: Array<Omit<IText, TRoomObjectKeys>>;
    lights?: Array<Omit<ILight, TRoomObjectKeys>>;
}
