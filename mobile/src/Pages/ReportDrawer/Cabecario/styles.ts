import { ScrollView, TextInput } from 'react-native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
  },
  ScrollView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelSelect :{
    fontSize: 16,
    color: '#999'
  },
  textInput: {
    marginTop: 6,
    borderWidth: 0.2,
    borderColor: '#ccc',
    color: '#333',
    borderRadius: 3,
    padding: 5,
    backgroundColor: '#fff',
    width: '85%',
    fontSize:18,
    color: '#1060dd'
  },
  cardView:{
    marginTop: 8,
    width: '95%',
    backgroundColor: '#fff',
    elevation: 1,
    borderRadius: 4,
  },

  dataInput:{
    width: '30%',
    color: '#1060dd'
  },
  horaInput:{
    width: '15%',
    color: '#1060dd',

  },
  divLine:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default styles