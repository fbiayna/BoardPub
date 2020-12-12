import { StyleSheet } from 'react-native'

const goBackStyles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    top: 0,
    right: 0,
    marginLeft: 25,
    marginTop: 40
  },
  addContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: '#F1F1F1',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderWidth: 3,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  goBack: {
    color: '#fff'
  }
})

export default goBackStyles
