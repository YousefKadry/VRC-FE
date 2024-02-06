import AddCollaborator from './AddCollaborator';
import CollaboratorList from './collaborators-list/CollaboratorList';

const Collaborators = () => {
    return (
        <div className="w-full space-y-8">
            <AddCollaborator />
            <CollaboratorList />
        </div>
    );
};

export default Collaborators;
