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
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
   
  }
})

export default styles