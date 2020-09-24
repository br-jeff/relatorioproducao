import { ScrollView, TextInput } from 'react-native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
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
  dataInput:{
    width: '30%',
    color: '#1060dd'
  },
  horaInput:{
    width: '15%',
    color: '#1060dd',
  },
  divLine:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardView:{
    borderWidth: 0.5,
    borderBottomColor: '#ccc',
    borderRadius: 3,
    marginTop: 10,
    width: '90%',
    padding: 2,
  },
  selectEng: {
    width: '73%'
  },
  labelCenter:{
    textAlign: "center"
  },
  longDescr:{
    marginTop: 6,
    marginBottom: 8,
    borderWidth: 0.2,
    borderColor: '#ccc',
    color: '#333',
    borderRadius: 3,
    padding: 5,
    backgroundColor: '#fff',
    width: '95%',
    fontSize:18,
    color: '#1060dd',
    minHeight:100,
  },
  viewPavimento:{
    justifyContent: "center",
    alignItems:"center",
  },
  scrollView: {
     flex: 1,
     width: '100%' ,
  }
})

export default styles