import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fafafa',
  },
  button: {
    width: '48%',
    height: 50,
    backgroundColor: '#1060dd',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: "center",
    margin: 5,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: "bold",
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
    color: '#1060dd',
    margin: 5,
  },
  viewInLine:{
    width: "90%",
    marginTop: 6,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    borderColor: '#ccc',
    color: '#333',
    borderRadius: 3,

  },
  scroll: {
    width: '90%',
    marginTop: 7,
    borderWidth: 0.2,
    borderColor: '#ccc',
    borderRadius: 3,
    backgroundColor: "#fff"
  }
})

export default styles