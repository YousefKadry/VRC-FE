import { Navigate, Route } from 'react-router-dom';
import { IRoutes } from '../models/app-routes';

const routesBuilder = (isAuth: boolean) => {
    const buildRoutes = (routes: IRoutes, prevPathParts: string[] = []) => {
        return Object.entries(routes).map(([path, { Element, children, index, redirectTo }]) => {
            let ele = Element;

            const currPathParts = [...prevPathParts, ...path.split('/')];
            const absolutePath = '/' + currPathParts.filter((p) => p && p !== '/').join('/');

            const shouldRedirect =
                (redirectTo?.when === 'AUTH' && isAuth) || (redirectTo?.when === 'NOT_AUTH' && !isAuth);

            if (shouldRedirect && absolutePath === location.pathname) {
                const redirectToSearchParam = new URLSearchParams(location.search).get('redirectTo');
                const redirectPath = redirectToSearchParam || redirectTo.to.replace('^path$', absolutePath);
                ele = <Navigate to={redirectPath} replace={true} relative="route" />;
            } else if (shouldRedirect) {
                ele = null;
            }

            if (index === true) {
                return <Route key={absolutePath} index path={path} element={ele} />;
            }

            if (children) {
                Object.keys(children).forEach((key) => {
                    Object.defineProperty(children[key], 'redirectTo', {
                        value: children[key].redirectTo || redirectTo,
                        enumerable: true,
                    });
                });
            }

            return (
                <Route key={absolutePath} path={path} element={ele}>
                    {children && buildRoutes(children, currPathParts)}
                </Route>
            );
        });
    };

    return buildRoutes;
};

export default routesBuilder;
