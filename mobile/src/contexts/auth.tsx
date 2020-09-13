import React, {createContext} from 'react'
import * as auth from '../services/auth'

interface AuthContextData{
    logado: boolean;
    user: object
    singIn(): Promise<void>
}

const AuthContext = createContext<AuthContextData>( {} as AuthContextData);

export const AuthProvider: React.FC = ( {children} ) => {
    
    async function singIn() {
       const response = await auth.singIn()
       console.log(response)
    }

    return ( 
        <AuthContext.Provider value={{logado: false,user:{},singIn}}>
            {children}
        </AuthContext.Provider>  
   )
};


export default AuthContext;