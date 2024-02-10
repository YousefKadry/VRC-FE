import { useSelector } from 'react-redux';

import { IAppStore } from '../../../models/app-store';

const Avatar = () => {
    const userInfo = useSelector((store: IAppStore) => store.auth.userInfo);

    if (!userInfo) {
        return null;
    }

    const name = `${userInfo.firstName} ${userInfo.lastName}`;
    const nameParts = name.split(' ').filter((part) => !!part);
    const avatar = `${nameParts.at(0)?.at(0)}${nameParts.at(-1)?.at(0)}`;

    return (
        <div
            className="w-10 aspect-square flex justify-center items-center rounded-full border-2 select-none"
            title={name}
        >
            <p className="uppercase text-lg font-bold">{avatar}</p>
        </div>
    );
};

export default Avatar;
