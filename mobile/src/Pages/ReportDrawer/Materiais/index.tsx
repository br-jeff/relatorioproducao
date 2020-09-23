import React from 'react'
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import {RectButton} from 'react-native-gesture-handler';

const Materiais: React.FC = () => {
  return (
    <View style={styles.container}>
      <RectButton style={styles.button}>
        <Text style={styles.textButton}> Materiais </Text>
      </RectButton>
      <Text> Materiais</Text>
    </View>
  );
}
export default Materiais;
