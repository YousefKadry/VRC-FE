export interface ILogin {
    email: string;
    password: string;
}

export interface ISignUp {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

export interface IUserInfo {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
}

export interface IForgotPassword {
    email: string;
}

export interface IResetPassword {
    token: string;
    password: string;
    repeatedPassword: string;
}
