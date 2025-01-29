
import { createContext, useState } from 'react';
import { IAuthContextProvider, IAuthContext, ILoginData } from './type';
import { IUser } from '../types/user';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api';

export const AuthContext = createContext<IAuthContext>({} as IAuthContext); // o create auth precisa de um objeto para iniciar, por isso que tem um {} (nesse caso está vazio)

export const AuthContextProvider = ({children} : IAuthContextProvider) => {

    const navigate = useNavigate();

    const [user, setUser] = useState<IUser>({} as IUser);  

    const handleLogin = async (loginData: ILoginData) => {
        try {
                   const { data } = await api.get(`users?email=${loginData.email}&password=${loginData.password}`);
                    if(data.length === 1 ){
                        setUser(data[0])
                        navigate('/feed')
                    }else{
                       alert("Email ou senha inválida.")
                    }
                } catch (error) {
                   alert("Houve um erro, error: " + error)
                }
    }

    const handleSingOut = () =>{
        setUser({} as IUser)
    }
    return(
        <AuthContext.Provider value={{user, handleLogin, handleSingOut}}>
            {children}
        </AuthContext.Provider>
    )
    
}

 
