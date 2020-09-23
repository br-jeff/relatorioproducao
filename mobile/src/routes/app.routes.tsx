import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../Pages/Home'
import MoreOptions from '../Pages/MoreOptions'
import NewReportRoutes from './report.routes'

const AppStack = createStackNavigator()

const AppRoutes: React.FC = () => {
    return ( 
            <AppStack.Navigator >
                <AppStack.Screen  name="Home" component={Home} 
                options={{headerShown: false } }  />
                <AppStack.Screen  name="MoreOptions" component={MoreOptions} 
                options={{headerShown: false } }  /> 
                <AppStack.Screen  name="NewReportRoutes" component={NewReportRoutes}   />   
            </AppStack.Navigator>
            
       
    )
}

export default AppRoutes