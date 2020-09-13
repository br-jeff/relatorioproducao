import React, {createContext,useState,useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import * as auth from '../services/auth'

interface AuthContextData{
    logado: boolean;
    user: object | null
    singIn(): Promise<void>
}

const AuthContext = createContext<AuthContextData>( {} as AuthContextData);

export const AuthProvider: React.FC = ( {children} ) => {
    const [ user, setUser ] = useState<object | null>(null)
    useEffect(()=> {
        async function loadStorageData() {
         const storagedUser = await AsyncStorage.getItem('@rp:user')
         const storagedToken = await AsyncStorage.getItem('@rp:token')   

         if(storagedUser &&  storagedToken ) {
             setUser(JSON.parse(storagedUser))
         }
        }
        loadStorageData() 
     },[])
    async function singIn() {
       const response = await auth.singIn()

       setUser(response.user)
       console.log(JSON.stringify(response.user) +  response.token)
       await AsyncStorage.setItem('@rp:user',JSON.stringify(response.user))
       await AsyncStorage.setItem('@rp:token',response.token)
    }

    return ( 
        <AuthContext.Provider value={{logado: !!user,user,singIn}}>
            {children}
        </AuthContext.Provider>  
   )
};


export default AuthContext;