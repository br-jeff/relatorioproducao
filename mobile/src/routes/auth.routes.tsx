import React from 'react'
import login from '../Login'
import { createStackNavigator } from '@react-navigation/stack'

const AuthStack = createStackNavigator()

const AuthRoutes: React.Fc = () => {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name='login' component={login} />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes