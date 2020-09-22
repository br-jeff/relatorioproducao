import React from 'react'
import { View, Text } from "react-native";
import styles from './styles'

const ItemMenu: React.FC  = ({children}) => {
    return(
    <View style={styles.container}>
        {children}
    </View> 
    )
}
export default ItemMenu;