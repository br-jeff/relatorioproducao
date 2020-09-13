import React from 'react';
import { View,Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler'

function Login ({navigation} ) {
    return (
     <View style={styles.container} >
         <View style={styles.img}> </View>
         <View style={styles.moldura} >
            <TextInput style={styles.input} 
             placeholder=" Digite Seu usuario" />

                <TextInput style={styles.input} 
                 placeholder=" Digite Sua Senha" />
           
                <RectButton  style={ styles.loginButton}   
                    onPress= {() => navigation.navigate('Home')}  >
                        <Text style={styles.textButton}> Entrar </Text> 
                       
                </RectButton >
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
    img{ 
        width: 30,
        height: 90
        },
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
        height: 43,
        marginTop: 18,
    },  
    loginText: {
        fontSize: 17,
        color: '#fff'
    },
    loginButton: {
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#29f',
        width: '90%',
        height: 40,
        borderRadius: 20,

    },
    textButton: {
        fontSize: 16,
        color: '#fff'
        
    }
})
export default Login;