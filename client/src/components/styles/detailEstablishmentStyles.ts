import { StyleSheet } from 'react-native'

const detailEstablishmentStyles = StyleSheet.create({
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
    elevation: 5,
    zIndex: 1
  },
  establishment: {
    marginTop: 20,
    width: 150,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  establishmentText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  schedule: {
    color: '#9E9E9E'
  },
  ubicationIcon: {
    color: '#9E9E9E'
  },
  ubication: {
    color: '#9E9E9E',
    fontWeight: 'bold',
    marginLeft: 5
  },
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
  valorationsContainer: {
    height: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    elevation: 5,
    marginBottom: 10
  },
  infoValoration: {
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 5
  },
  numbersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  valContainer: {
    flex: 1.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  numbersValoration: {
    fontWeight: 'bold',
    color: '#000',
    fontSize: 15
  },
  textValoration: {
    flex: 2,
    color: '#9E9E9E',
    fontWeight: 'bold'
  },
  opinionContainer: {
    height: 85,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 5
  },
  opinionTextContainer: {
    flex: 1.25,
    marginLeft: 15
  },
  opinionStarContainer: {
    flex: 1.5,
    flexDirection: 'row'
  },
  opinionText: {
    color: '#9E9E9E',
    fontWeight: 'bold'
  },
  opinionStar: {
    color: '#C4C4C4'
  },
  ubiContainer: {
    alignItems: 'center',
    marginBottom: 5
  },
  backButton: {
    position: 'absolute',
    zIndex: 2,
    left: 0,
    top: 0,
    right: 0,
    marginLeft: 25,
    marginTop: 35
  },
  backContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  goBack: {
    color: '#fff'
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
  menuContainer: {
    alignItems: 'center'
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFD7DB',
    borderRadius: 10,
    width: 300,
    height: 55,
    marginTop: 15,
    marginBottom: 15,
    elevation: 10
  },
  noActive: {
    color: '#7C7C7C',
    fontSize: 28
  },
  active: {
    color: '#000',
    fontSize: 28
  }
})

export default detailEstablishmentStyles
