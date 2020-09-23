import React from 'react'
import {View, Text, ScrollView,TextInput} from 'react-native';
import styles from './styles';
import {RectButton} from 'react-native-gesture-handler';

const Cabecario: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TextInput style={styles.textInput}/>

        <Text> Cabecario</Text>
      </ScrollView>
    </View>
  );
}
export default Cabecario;