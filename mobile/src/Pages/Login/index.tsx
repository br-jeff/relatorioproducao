import React,{useContext} from 'react';
import { View,Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'
import {singIn} from '../../services/auth'
import AuthContext from '../../contexts/auth'


const Login: React.FC = () => {

    const { logado } = useContext(AuthContext)
    console.log(logado)

     async function  handleSingIn() { 
        const response = await singIn()
        console.log(response)
    }

    return (
     <View style={styles.container} >
         <View style={styles.moldura} >
            <TextInput style={styles.input}  placeholder=" Digite Seu usuario" />
                <TextInput style={styles.input}  placeholder=" Digite Sua Senha" />
           
               <RectButton style={styles.loginButton} onPress={handleSingIn}>
                   <Text style={styles.loginText}> Login </Text>
               </RectButton>
            </View>
        </View>
      );
}


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#fafafa',
    } ,
    moldura: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 3,
    } ,
    input:{
        borderWidth: 0.3,
        borderRadius: 4,
        width: '90%',
        marginTop: 18,

    },  
    loginText: {
        fontSize: 17,
        color: '#fff'
    },
    loginButton: {
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#29f',
        margin: 30,
        padding: 7,
        height: 40,
        width:'90%',
        borderRadius: 20,

    },

})
export default Login;