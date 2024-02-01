import React from 'react';
import { useDispatch } from 'react-redux';
import { twJoin } from 'tailwind-merge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

import CustomButton from '../../../../shared/Button';

import { shareThunk } from '../../../../../store/share/shareThunk';
import { TAppDispatch } from '../../../../../store/app-store';

interface SharingButtonProps {
    sharingURL: string;
}

const SharingButton: React.FC<SharingButtonProps> = ({ sharingURL }) => {
    const dispatch = useDispatch<TAppDispatch>();

    const onShare = () => {
        dispatch(shareThunk(sharingURL));
    };

    return (
        <CustomButton
            onClick={onShare}
            className={twJoin('from-RoomButtonGradient1 to-RoomButtonGradient2', 'w-fit m-0 rounded-lg')}
        >
            <FontAwesomeIcon className="text-white text-xl" icon={faShare} />
        </CustomButton>
    );
};

export default SharingButton;
