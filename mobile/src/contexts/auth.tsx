import React, {createContext} from 'react'

interface AuthContextData{
    logado: boolean;
    token: string;
    user: object
}

const AuthContext = createContext<AuthContextData>( {} as AuthContextData);

export const AuthProvider: React.FC = ( {children} ) => (
    <AuthContext.Provider value={{logado: false}}>
        {children}
   </AuthContext.Provider>  
);


export default AuthContext;