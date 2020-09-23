import React from 'react'
import Cabecario from '../Pages/Cabecario'
import Equipe from '../Pages/Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();


const NewReportRoutes: React.FC = () => {
    return(
            <Tab.Navigator initialRouteName="Cabecario">
                <Tab.Screen name='Cabecario' component={Cabecario} />
                <Tab.Screen name='Equipe' component={Equipe} />
            </Tab.Navigator>
    )
}

export default NewReportRoutes;