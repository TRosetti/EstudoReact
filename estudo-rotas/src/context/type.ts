
import { IUser } from "../types/user";

export interface IAuthContext {
    user: IUser;
    handleLogin: (loginData: ILoginData) => Promise<void> ;// é uma função que recebe o os dados de login e retorna nada por enquanto (mas tem o Promise pois é uma função assincrona)
    handleSingOut: () => void;
}

export interface IAuthContextProvider {
    children: React.ReactNode;
}

export interface ILoginData {
    email: string;
    password: string;
}