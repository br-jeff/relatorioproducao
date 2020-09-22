import React from 'react'
import { View, Text,ScrollView} from "react-native";
import ItemMenu from '../../componentes/ItemMenu';
import HeaderHome from '../../componentes/HeaderHome'
import styles from './styles';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';


const Home: React.FC  = () => {
    const navigation = useNavigation()
    function navigateMoreOptions(){
        navigation.navigate('MoreOptions')
    }
    return(
        <>
        <HeaderHome>
        <View style={styles.buttonContainer}>
          <View style={styles.alingButton}>
  
            <RectButton style={styles.buttonMais} onPress={navigateMoreOptions}>
              <Text style={styles.textButton}> + </Text>
            </RectButton>
 
            <RectButton style={styles.button}>
              <Text style={styles.textButton}> Atualizar </Text>
            </RectButton>

            <RectButton style={styles.button} >
              <Text style={styles.textButton}> Enviar Relatorio</Text>
            </RectButton>
          </View>
        </View>
        </HeaderHome>
     
            <ScrollView style={styles.scroll}  
            contentContainerStyle={{
                    paddingHorizontal:6,
                    paddingBottom:10,
                    marginBottom:300,
                }}>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
                    <ItemMenu/>
              </ScrollView>
     
        </>
    )
}
export default Home