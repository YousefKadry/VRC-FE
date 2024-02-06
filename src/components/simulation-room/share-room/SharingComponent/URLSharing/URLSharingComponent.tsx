import React from 'react';

import SharingButton from './SharingButton';
import URLDisplay from './URLDisplay';

interface URLSharingComponentProps {
    sharingURL: string;
}

const URLSharingComponent: React.FC<URLSharingComponentProps> = ({ sharingURL }) => {
    return (
        <div className="flex items-center gap-3">
            <URLDisplay sharingURL={sharingURL} />
            <SharingButton sharingURL={sharingURL} />
        </div>
    );
};

export default URLSharingComponent;
