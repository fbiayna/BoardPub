import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
navigationFooter: {
    backgroundColor: '#fff',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: 71,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
    },
    navigationOptions: {
    alignItems: 'center'
    },
    iconNavigationActive: {
    fontSize: 25,
    color: '#000'
    },
    iconnavigationNotActive: {
    fontSize: 25,
    color: '#7C7C7C'
    },
    navigationFooterActive: {
    fontWeight: 'bold',
    color: '#000'
    },
    navigationFooterNotActive: {
    fontWeight: 'bold',
    color: '#7C7C7C'
    }
})

export default style