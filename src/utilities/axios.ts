import axios, { AxiosError, AxiosRequestConfig } from 'axios';

import appStore from '../store/app-store';
import { storeUISliceActions } from '../store/slices/ui/ui-slice';
import { storeAuthSliceActions } from '../store/slices/auth/auth-slice';

class AxiosUtil {
    public static async sendRequest(axiosConfig: AxiosRequestConfig, options: { showError?: boolean } = {}) {
        const { showError } = options;

        appStore.dispatch(storeUISliceActions.setError(''));
        appStore.dispatch(storeUISliceActions.setIsLoading(true));

        let responseData;

        try {
            responseData = (await axios({ ...axiosConfig })).data;
        } catch (err) {
            if (showError !== false) {
                const errResponse = err as AxiosError<any, any>;
                const response = errResponse.response?.data;
                const errorMsg =
                    response?.message ||
                    errResponse.message ||
                    'something wrong has been occurred, try again!';

                appStore.dispatch(storeUISliceActions.setError(errorMsg));
            }
        }

        appStore.dispatch(storeUISliceActions.setIsLoading(false));

        return responseData;
    }

    public static requestInterceptor() {
        axios.interceptors.request.use(
            (config) => {
                const token = appStore.getState().auth.token;

                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                return config;
            },
            (error) => Promise.reject(error)
        );
    }

    public static responseInterceptor() {
        axios.interceptors.response.use(
            (response) => {
                return response;
            },
            (error: AxiosError<any, any>) => {
                if (error.response?.status === 401 || error.response?.status === 403) {
                    appStore.dispatch(storeAuthSliceActions.resetAuthInfo());
                }

                return Promise.reject(error);
            }
        );
    }
}

export default AxiosUtil;
