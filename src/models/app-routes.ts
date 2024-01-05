export interface IRoutes {
    [key: string]: {
        Element?: any;
        redirectTo?: {
            to: string;
            when: 'AUTH' | 'NOT_AUTH';
        };
        index?: boolean;
        children?: IRoutes;
    };
}
