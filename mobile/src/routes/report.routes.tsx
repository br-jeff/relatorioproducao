import React from 'react';
import Cabecario from '../Pages/ReportDrawer/Cabecario';
import Equipes from '../Pages/ReportDrawer/Equipes';
import Equipamentos from '../Pages/ReportDrawer/Equipamentos';
import Materiais from '../Pages/ReportDrawer/Materiais';
import Servicos from '../Pages/ReportDrawer/Servicos';
import Pip from '../Pages/ReportDrawer/Pip';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const NewReportRoutes: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Cabecario">
      <Tab.Screen name="Cabecario" component={Cabecario} />
      <Tab.Screen name="Equipes" component={Equipes} />
      <Tab.Screen name="Equipamentos" component={Equipamentos} />
      <Tab.Screen name="Materiais" component={Materiais} />
      <Tab.Screen name="Servicos" component={Servicos} />
      <Tab.Screen name="Pip" component={Pip} />
    </Tab.Navigator>
  );
}

export default NewReportRoutes;
