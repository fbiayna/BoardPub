import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%'
  },
  headerTop: {
    backgroundColor: '#92000A',
    height: 95.5,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },
  ubication: {
    marginTop: 20,
    width: 300,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  town: {
    flexDirection: 'row'
  },
  ubicationText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  nearIcon: {
    fontSize: 18,
    color: '#fff'
  },
  nearYouText: {
    color: '#fff'
  },
  map: {
    width: '100%',
    height: '100%'
  }
})

export default style
