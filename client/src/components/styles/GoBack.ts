import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  headerDetail: {
    zIndex: 1,
    position: 'absolute',
    width: '100%',
    height: 70,
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-end'
  },
  goBack: {
    color: '#fff',
    opacity: 2,
    marginLeft: 20,
    marginBottom: 10
  }
})

export default style
