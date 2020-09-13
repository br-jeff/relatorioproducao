import React, {createContext,useState,useEffect} from 'react'
import {View,ActivityIndicator } from 'react-native'
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
    const [ loading, setLoading ] = useState(true)

    useEffect(()=> {
        async function loadStorageData() {
         const storagedUser = await AsyncStorage.getItem('@rp:user')
         const storagedToken = await AsyncStorage.getItem('@rp:token')   

         if(storagedUser &&  storagedToken ) {
             setUser(JSON.parse(storagedUser))
             setLoading(false)
         }
        }
        loadStorageData()  //quando app inicia verifica se o usuario esta logado
     },[])
    async function singIn() {
       const response = await auth.singIn()

       setUser(response.user)
       console.log(JSON.stringify(response.user) +  response.token)
       await AsyncStorage.setItem('@rp:user',JSON.stringify(response.user))
       await AsyncStorage.setItem('@rp:token',response.token)
    }

    if (loading) {
        return(
            <View style={{flex: 1,justifyContent: 'center',alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#29f" />
            </View>
        )
    }

    return ( 
        <AuthContext.Provider value={{logado: !!user,user,singIn}}>
            {children}
        </AuthContext.Provider>  
   )
};


export default AuthContext;