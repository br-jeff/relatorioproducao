import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#fafafa',
    },
    button: {
        width: '48%',
        height: 60,
        backgroundColor: '#1060dd',
        borderRadius: 8,
        justifyContent: "center"
    },
    buttonLeft: {
       marginLeft: 8,
    },
    textButton:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center',
    },
    dualButtonContainer: {
        marginTop: 50,
        justifyContent: 'center',
        flexDirection: 'row',
        width: '95%',
        height: 20

    }

})

export default styles