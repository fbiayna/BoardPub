import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%'
  },
  listContainer: {
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
    width: 110,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ubicationText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  menuContainer: {
    alignItems: 'center'
  },
  favoritesContainer: {
    flexGrow: 1,
    flex: 1,
    height: '100%'
  },
  favoriteContainer: {
    alignItems: 'center',
    marginTop: 15
  },
  favorite: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: '85%',
    height: 125,
    elevation: 10
  },
  imageContainer: {
    flex: 1
  },
  favoriteImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  infoContainer: {
    flex: 0.60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  establishment: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
    marginBottom: 8
  }
})

export default style
