import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { IAppStore } from '../models/app-store';
import { IProtectedRoutes } from '../models/app-routes';

/**
 * ProtectedRoutes Component
 * -------------------------
 * The job of the component is to protect the app routes somehow depending on the entered attributes.
 * ***
 *
 * @param redirectWhen — when are the children routes prevented from being visitable?
 *
 * Examples
 * --------
 * redirectWhen="AUTH" — means prevent the routes when the user is authenticated.
 *
 * redirectWhen="NOT_AUTH" — means prevent the routes when the user is not authenticated.
 * ***
 *
 * @param redirectTo — where to redirect if the mode of the **redirectWhen** attribute is satisfied.
 *
 * Examples
 * --------
 * redirectTo="/dashboard" — means redirect to "/dashboard" if the mode of the **redirectWhen** attribute is satisfied.
 *
 */

const ProtectedRoutes: React.FC<IProtectedRoutes> = (props) => {
    const { redirectTo, redirectWhen } = props;

    const isAuth = !!useSelector((store: IAppStore) => store.auth.userInfo);

    if ((redirectWhen === 'AUTH' && !isAuth) || (redirectWhen === 'NOT_AUTH' && isAuth)) {
        return <Outlet />;
    }

    return <Navigate to={redirectTo} relative="route" replace={true} />;
};

export default ProtectedRoutes;
