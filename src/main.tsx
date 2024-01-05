import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import AxiosUtil from './utilities/axios.ts';

import './index.css';
import 'swiper/css';
import 'swiper/css/navigation';

import appStore, { persistedStore } from './store/app-store.ts';

AxiosUtil.requestInterceptor();
AxiosUtil.responseInterceptor();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={appStore}>
            <PersistGate loading={null} persistor={persistedStore}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
