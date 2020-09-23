import React from 'react'
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import {RectButton} from 'react-native-gesture-handler';

const Servicos: React.FC = () => {
  return (
    <View style={styles.container}>
      <RectButton style={styles.button}>
        <Text style={styles.textButton}> Servicos </Text>
      </RectButton>
      <Text> Servicos</Text>
    </View>
  );
}
export default Servicos;
