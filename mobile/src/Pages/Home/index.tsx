import React from 'react'
import { View, Text } from "react-native";
import ItemMenu from '../../componentes/ItemMenu';
import styles from './styles';


const Home: React.FC  = () => {
    return(
        <View style={styles.container}>
            <ItemMenu/>
        </View> 
    )
}
export default Home