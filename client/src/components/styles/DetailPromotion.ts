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
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  price: {
    color: '#fff',
    fontWeight: 'bold'
  },
  infoContainer: {
    height: 150
  },
  titleContainer: {
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
  }

})

export default style
