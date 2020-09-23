import React from 'react'
import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import {RectButton} from 'react-native-gesture-handler';

const Pip: React.FC = () => {
  return (
    <View style={styles.container}>
      <RectButton style={styles.button}>
        <Text style={styles.textButton}> Pip </Text>
      </RectButton>
      <Text> Pip</Text>
    </View>
  );
}
export default Pip;
