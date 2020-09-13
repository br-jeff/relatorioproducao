import React from 'react'
import Login from '../Pages/Login'
import { createStackNavigator } from '@react-navigation/stack'

const AuthStack = createStackNavigator()

const AuthRoutes: React.Fc = () => {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name='login' component={Login} />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes