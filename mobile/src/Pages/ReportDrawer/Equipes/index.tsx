import React from 'react'
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import {RectButton} from 'react-native-gesture-handler';

const Equipes: React.FC = () => {
  return (
    <View style={styles.container}>
      <RectButton style={styles.button}>
        <Text style={styles.textButton}> Equipes </Text>
      </RectButton>
      <Text> Equipes</Text>
    </View>
  );
}
export default Equipes;
