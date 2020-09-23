import React from 'react'
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import {RectButton} from 'react-native-gesture-handler';

const Cabecario: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dualButtonContainer}>
        <RectButton style={styles.button}>
          <Text style={styles.textButton}> Cabecario </Text>
        </RectButton>
        <Text> Cabecario</Text>
      </View>
    </View>
  );
}
export default Cabecario;