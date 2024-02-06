import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export interface ICollaboratorItemProps {
    id: string;
    email: string;
    collaboratorDeletionHandler: (id: string) => void;
}

const CollaboratorItem: React.FC<ICollaboratorItemProps> = (props) => {
    const { id, email, collaboratorDeletionHandler } = props;

    return (
        <li className="flex justify-between items-center gap-2 py-1 select-none">
            <p className="truncate" title={email}>
                {email}
            </p>

            <button
                className="p-0.5 w-6 aspect-square rounded hover:bg-simulation-room-sidebar-bg/50"
                title="delete collaborator"
                onClick={collaboratorDeletionHandler.bind(null, id)}
            >
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </li>
    );
};

export default CollaboratorItem;
