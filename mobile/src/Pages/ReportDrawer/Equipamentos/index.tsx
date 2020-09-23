import React from 'react'
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import {RectButton} from 'react-native-gesture-handler';

const Equipamentos: React.FC = () => {
  return (
    <View style={styles.container}>
        <RectButton style={styles.button}>
          <Text style={styles.textButton}> Equipamentos </Text>
        </RectButton>
        <Text> Equipamentos</Text>
    </View>
  );
}
export default Equipamentos;