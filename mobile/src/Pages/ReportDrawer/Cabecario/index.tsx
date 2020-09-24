import React from 'react'
import {View, Text, ScrollView, TextInput} from 'react-native';
import styles from './styles';
import {RectButton} from 'react-native-gesture-handler';

const Cabecario: React.FC = () => {
  return (
    <View style={styles.container}>

    <ScrollView style={styles.scrollView}
    contentContainerStyle={{
      marginBottom: 3,
      justifyContent: "center",
      alignItems: "center"
    }}>


      <View style={styles.cardView}>
        <View style={styles.divLine}>
          <Text style={styles.labelSelect}> Obra </Text>
          <TextInput style={styles.textInput} placeholder="2.39.XXXX - Obra " />
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
      <View style={styles.cardView}>

        <View style={styles.divLine}>
          <Text style={styles.labelSelect}> Engenheiro </Text>
          <TextInput
            style={[styles.textInput, styles.selectEng]}
            placeholder="Engenheiro Responsavel "
          />
        </View>
        
        <View style={styles.divLine}>
          <Text style={styles.labelSelect}> Pavimento </Text>
          <TextInput
            style={[styles.textInput, styles.selectEng]}
            placeholder="condicoes do pavimento "
          />
        </View>
        <View style={styles.viewPavimento}>
          <Text style={[styles.labelSelect,styles.labelCenter]}> Pavimento </Text>
          <TextInput
              style={styles.longDescr}
              multiline={true}
              underlineColorAndroid='transparent'
          />
      </View>
      </View>
      </ScrollView >
    </View>

  );
}
export default Cabecario;
