import { StyleSheet } from 'react-native'

const establishmentListStyles = StyleSheet.create({
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
    width: '85%',
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
    fontFamily: 'CabinBold'
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
    fontFamily: 'CabinBold',
    fontSize: 17,
    marginTop: 4,
    marginBottom: 3
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
    fontFamily: 'CabinBold'
  }
})

export default establishmentListStyles
