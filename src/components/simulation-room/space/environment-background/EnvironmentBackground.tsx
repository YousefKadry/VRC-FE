import React from 'react';
import { useSelector } from 'react-redux';
import { Environment, useEnvironment } from '@react-three/drei';

import { IAppStore } from '../../../../models/app-store';

const EnvironmentBackground = () => {
    const selectedBackground = useSelector((store: IAppStore) => store.rooms.selectedRoom?.state.background);

    const envMap = useEnvironment({ files: selectedBackground });

    return <Environment map={envMap} background="only" />;
};

export default React.memo(EnvironmentBackground);
