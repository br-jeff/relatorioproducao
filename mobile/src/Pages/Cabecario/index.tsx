import React from 'react'
import { View, Text,ScrollView} from "react-native";
import styles from './styles';
import {RectButton} from 'react-native-gesture-handler';


const Home: React.FC  = () => {
    return(
    
        <View style={styles.container}>

          <View style={styles.dualButtonContainer} > 
            <RectButton style={styles.button} >
                  <Text style={styles.textButton}> Estoque </Text>
            </RectButton>

            <RectButton style={ [styles.button, styles.buttonLeft]} >
                  <Text style={styles.textButton}> Atualizar Estoque </Text>
            </RectButton>
          </View>

          <View style={styles.dualButtonContainer} > 
            <RectButton style={ [styles.button, styles.buttonLeft]} >
                  <Text style={styles.textButton}> Enviar Fotos </Text>
            </RectButton>
          </View>
        
         


         </View>
    )
}
export default Home