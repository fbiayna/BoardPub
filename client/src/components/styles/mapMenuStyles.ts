import { StyleSheet } from 'react-native'

const mapMenuStyles = StyleSheet.create({
  menuContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 95.5,
    right: 15
  },
  menu: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 10,
    width: 45,
    height: 150,
    marginTop: 15,
    marginBottom: 15,
    elevation: 10
  },
  restaurant: {
    color: 'blue',
    fontSize: 18
  },
  localBar: {
    color: 'gold',
    fontSize: 18
  },
  localOffer: {
    color: 'violet',
    fontSize: 18
  },
  localActivity: {
    color: 'orange',
    fontSize: 18
  }
})

export default mapMenuStyles
