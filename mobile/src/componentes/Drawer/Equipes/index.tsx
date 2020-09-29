import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

function ItemMenu() {
  return (
    <View style={styles.container}>
      <View style={styles.containerCircle}>
        <Text style={styles.nome}>Jefferson Ferreira Da Silva </Text>
      </View>
      <View style={styles.onlineESinc}>
        <Text style={styles.sincronizada}>Sincronizado</Text>
        <Text style={styles.tipo}>Online</Text>
      </View>
    </View>
  );
}

export default ItemMenu;
