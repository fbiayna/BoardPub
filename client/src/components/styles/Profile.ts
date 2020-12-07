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
  profile: {
    marginTop: 20,
    width: 110,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  photoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  photoPreContainer: {
    height: 70,
    width: 70
  },
  photo: {
    width: '100%',
    height: '100%'
  }
})

export default style
