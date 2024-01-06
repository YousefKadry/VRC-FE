export interface IProtectedRoutes {
    redirectWhen: 'AUTH' | 'NOT_AUTH';
    redirectTo: string;
}
