import React from 'react'
import {View, Text, ScrollView, TextInput} from 'react-native';
import styles from './styles';
import {RectButton} from 'react-native-gesture-handler';

const Cabecario: React.FC = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.cardView}>
          <View style={styles.divLine}>
            <Text style={styles.labelSelect}> Obra </Text>
            <TextInput
              style={styles.textInput}
              placeholder="2.39.XXXX - Obra "
            />
          </View>

          <View style={styles.divLine}>
            <Text style={styles.labelSelect}> Data </Text>
            <TextInput
              style={[styles.labelSelect, styles.dataInput]}
              placeholder="01/01/2000"
            />
              <Text style={styles.labelSelect}> Incio </Text>
            <TextInput
              style={[styles.labelSelect, styles.horaInput]}
              placeholder="00:00"
            />
              <Text style={styles.labelSelect}> Fim </Text>
            <TextInput
              style={[styles.labelSelect, styles.horaInput]}
              placeholder="00:00"
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
export default Cabecario;
