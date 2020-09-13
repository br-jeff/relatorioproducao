import React, {createContext,useState} from 'react'
import * as auth from '../services/auth'

interface AuthContextData{
    logado: boolean;
    user: object | null
    singIn(): Promise<void>
}

const AuthContext = createContext<AuthContextData>( {} as AuthContextData);

export const AuthProvider: React.FC = ( {children} ) => {
    const [ user, setUser ] = useState<object | null>(null)

    async function singIn() {
       const response = await auth.singIn()

       setUser(response.user)
    }

    return ( 
        <AuthContext.Provider value={{logado: !!user,user,singIn}}>
            {children}
        </AuthContext.Provider>  
   )
};


export default AuthContext;