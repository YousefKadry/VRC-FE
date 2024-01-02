import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { storeUISliceActions } from '../store/slices/ui/ui-slice';

const useHttp = () => {
    const dispatch = useDispatch();

    const [response, setResponse] = useState<any>(null);

    const activeRequests = useRef<AbortController[]>([]);

    useEffect(() => {
        return () => {
            activeRequests.current.forEach((reqCtrl) => reqCtrl.abort());
            dispatch(storeUISliceActions.setIsLoading(false));
            dispatch(storeUISliceActions.setError(''));
        };
    }, [dispatch]);

    const request = useCallback(
        async (config: Omit<AxiosRequestConfig, 'signal'>): Promise<AxiosResponse<any, any> | null> => {
            dispatch(storeUISliceActions.setError(''));
            dispatch(storeUISliceActions.setIsLoading(true));

            const reqAbortCtrl = new AbortController();
            activeRequests.current.push(reqAbortCtrl);

            try {
                let fetchedResponse;

                fetchedResponse = await axios({ ...config, signal: reqAbortCtrl.signal });

                activeRequests.current.filter((ctrl) => ctrl !== reqAbortCtrl);

                setResponse(fetchedResponse.data);
                dispatch(storeUISliceActions.setIsLoading(false));

                return fetchedResponse;
            } catch (errResponse: any) {
                const response = (errResponse as AxiosError<any, any>).response?.data;

                const errorMsg =
                    response?.message || errResponse.message || 'something wrong has been occurred!';

                dispatch(storeUISliceActions.setIsLoading(false));
                dispatch(storeUISliceActions.setError(errorMsg));
            }

            return null;
        },
        [dispatch]
    );

    return { request, response };
};

export default useHttp;
