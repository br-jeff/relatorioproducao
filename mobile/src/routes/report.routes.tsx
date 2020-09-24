import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Cabecario from '../Pages/ReportDrawer/Cabecario';
import Equipes from '../Pages/ReportDrawer/Equipes';
import Equipamentos from '../Pages/ReportDrawer/Equipamentos';
import Materiais from '../Pages/ReportDrawer/Materiais';
import Servicos from '../Pages/ReportDrawer/Servicos';
import Pip from '../Pages/ReportDrawer/Pip';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator();

const NewReportRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Cabecario"
      tabBarOptions={{
        activeTintColor: '#fff',
        style: {
          backgroundColor: '#0230dd',
        },
      }}>
      <Tab.Screen
        name="Cabecario"
        component={Cabecario}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="hard-hat" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Equipes"
        component={Equipes}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user-friends" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Equipamentos"
        component={Equipamentos}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="truck" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Materiais"
        component={Materiais}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-basket" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Servicos"
        component={Servicos}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="tools" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Pip"
        component={Pip}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="question" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default NewReportRoutes;
