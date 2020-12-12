import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    height: '100%'
  },
  imageContainer: {
    height: 200
  },
  establishmentImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  infoContainer: {
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    elevation: 5,
    marginBottom: 10
  },
  titleContainer: {
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 4
  },
  establishment: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#7C7C7C',
    marginBottom: 8
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5
  }
})

export default style
