import React from 'react';
import { Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import appRoutes from './routes';
import { IAppStore } from '../models/app-store';
import routesBuilder from './routes-builder';

const AppRoutes = () => {
    const isAuth = !!useSelector((store: IAppStore) => store.auth.userInfo);
    const hasAutoLoginFinished = !!useSelector((store: IAppStore) => store.auth.hasAutoLoginFinished);

    if (!hasAutoLoginFinished) {
        return null;
    }

    return <Routes>{routesBuilder(isAuth)(appRoutes)}</Routes>;
};

export default React.memo(AppRoutes);
