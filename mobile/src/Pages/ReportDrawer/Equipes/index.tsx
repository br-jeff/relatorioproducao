import React from 'react'
import {View, Text, ScrollView,TextInput} from 'react-native';
import styles from './styles';
import Item from '../../../componentes/Drawer/Equipes'
import {RectButton} from 'react-native-gesture-handler';

const Equipes: React.FC = () => {
  return (
    <View style={styles.container}>

      <View style={styles.viewInLine}>
        <TextInput style={styles.textInput} placeholder="Funcionario"/>
        <RectButton style={styles.button}>
          <Text style={styles.textButton}> Adicionar </Text>
        </RectButton>
      </View>
      <ScrollView style={styles.scroll}
       contentContainerStyle={{
        paddingHorizontal: 6,
        paddingBottom: 10,
        marginBottom: 300,
      }}>

      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>
      <Item/>

      </ScrollView>
    </View>
  );
}
export default Equipes;
