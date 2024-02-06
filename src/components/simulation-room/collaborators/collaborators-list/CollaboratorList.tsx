import { useDispatch, useSelector } from 'react-redux';

import CollaboratorItem from './CollaboratorItem';

import { IAppStore } from '../../../../models/app-store';
import { TAppDispatch } from '../../../../store/app-store';
import { deleteSelectedRoomCollaboratorThunk } from '../../../../store/slices/rooms/rooms-actions';

const CollaboratorList = () => {
    const collaborators = useSelector((store: IAppStore) => store.rooms.selectedRoom?.collaborators);
    const dispatch = useDispatch<TAppDispatch>();

    const handleCollaboratorDeletion = (id: string) => {
        dispatch(deleteSelectedRoomCollaboratorThunk(id));
    };

    const collaboratorList = Object.entries(collaborators || {});

    return (
        <div>
            <h3 className="font-bold text-lg mb-2">Collaborators</h3>

            {collaboratorList.length > 0 ? (
                <ul>
                    {collaboratorList.map(([id, email]) => {
                        return (
                            <CollaboratorItem
                                key={id}
                                id={id}
                                email={email}
                                collaboratorDeletionHandler={handleCollaboratorDeletion}
                            />
                        );
                    })}
                </ul>
            ) : (
                <p className="text-center text-sm">There aren't any collaborators yet.</p>
            )}
        </div>
    );
};

export default CollaboratorList;
