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
    width: 110,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  town: {
    flexDirection: 'row'
  },
  ubicationLogo: {
    backgroundColor: '#fff',
    width: 18,
    height: 18
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
  },
  promotionsContainer: {
    flexGrow: 1,
    flex: 1,
    height: '100%'
  },
  promotionContainer: {
    alignItems: 'center',
    marginBottom: 15
  },
  promotion: {
    borderRadius: 10,
    backgroundColor: '#fff',
    width: 300,
    height: 180,
    elevation: 10
  },
  imageContainer: {
    flex: 1
  },
  promotionImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  priceContainer: {
    width: 70,
    height: 38,
    backgroundColor: '#660007',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  price: {
    color: '#fff',
    fontWeight: 'bold'
  },
  infoContainer: {
    flex: 1
  },
  titleContainer: {
    flex: 2,
    justifyContent: 'center',
    marginLeft: 15,
    marginRight: 15
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 4,
    marginBottom: 3
  },
  establishment: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#7C7C7C',
    marginBottom: 8
  },
  otherInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15
  },
  otherInfo: {
    color: '#9E9E9E',
    fontSize: 12,
    fontWeight: 'bold'
  },
  headerDown: {
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
  headerOptions: {
    alignItems: 'center'
  },
  iconHeaderActive: {
    fontSize: 25,
    color: '#000'
  },
  iconHeaderNotActive: {
    fontSize: 25,
    color: '#7C7C7C'
  },
  headerFooterActive: {
    fontWeight: 'bold',
    color: '#000'
  },
  headerFooterNotActive: {
    fontWeight: 'bold',
    color: '#7C7C7C'
  }
})

export default style
