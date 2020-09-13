import React, {createContext} from 'react'

const AuthContext = createContext({logado: true});

export const AuthProvider: React.FC = ( {children} ) => (
    <AuthContext.Provider value={{logado: false}}>
        {children}
   </AuthContext.Provider>  
);


export default AuthContext;