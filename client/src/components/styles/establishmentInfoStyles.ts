import { StyleSheet } from 'react-native'

const establishmentInfoStyles = StyleSheet.create({
  descriptionContainer: {
    height: 125,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginBottom: 10
  },
  infoPromo: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 5
  },
  description: {
    color: '#9E9E9E',
    fontWeight: 'bold',
    paddingRight: 20,
    paddingLeft: 20
  },
  ubiContainer: {
    alignItems: 'center',
    marginBottom: 5
  },
  ubicationContainer: {
    height: 250,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    marginBottom: 10
  },
  map: {
    width: '100%',
    height: '100%'
  },
  ubication: {
    color: '#9E9E9E',
    fontWeight: 'bold',
    marginLeft: 5
  }
})

export default establishmentInfoStyles
