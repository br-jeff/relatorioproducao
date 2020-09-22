import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#fafafa',
        padding: 9,
    },
    button: {
        width: '40%',
        height: 60,
        backgroundColor: '#1060dd',
        borderRadius: 8,
        justifyContent: "center"
    },
    buttonMais:{
        width: 60,
        height: 60,
        backgroundColor: '#0230dd',
        borderRadius: 30,
        justifyContent: "center"
    },
   
    alingButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around', 
    },
    buttonContainer:{
        flex:1,
        justifyContent: 'center', 
        padding: 9,
        paddingBottom:25,
    },
    textButton:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center',
    },
    scroll: {
        flex: 1,
        marginTop: - 40,
        height: 100,
    },

})

export default styles