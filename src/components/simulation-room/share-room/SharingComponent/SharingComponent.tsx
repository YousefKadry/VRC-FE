import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { twJoin } from 'tailwind-merge';

import URLSharingComponent from './URLSharing/URLSharingComponent';

interface SharingComponentProps {
    sharingURL: string;
    RenderQR?: boolean;
}

const SharingComponent: React.FC<SharingComponentProps> = ({ sharingURL, RenderQR }) => {
    return (
        <div className="flex-col w-full space-y-7 mb-7">
            {RenderQR ? (
                <div
                    className={twJoin(
                        'bg-gradient-to-r from-simulation-room-gradient-from to-simulation-room-gradient-to',
                        'flex justify-center items-center w-full aspect-[1/1] rounded-lg'
                    )}
                >
                    <QRCodeSVG
                        value={sharingURL}
                        fgColor="rgb(var(--simulation-room-gradient-color))"
                        bgColor="transparent"
                        width="70%"
                        height="70%"
                    />
                </div>
            ) : null}

            <URLSharingComponent sharingURL={sharingURL} />
        </div>
    );
};

export default SharingComponent;
