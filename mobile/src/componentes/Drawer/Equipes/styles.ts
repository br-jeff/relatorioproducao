import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 65,
    width: '100%',
    backgroundColor: '#fff',
    elevation: 1,
    borderRadius: 8,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    color: '#1060dd',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  onlineESinc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    padding: 8,
  },
  tipo: {
    color: '#1060dd',
  },
  marca: {},
  hora: {},
  dia: {},
  marcaDiaContainer: {
    flexDirection: 'row',
    marginLeft: 50,
  },
  sincronizada: {
    color: '#666',
  },
})

export default styles